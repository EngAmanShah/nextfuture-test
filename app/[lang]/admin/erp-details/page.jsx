"use client";
import React, { useState, useContext, useEffect, use } from "react";
import Pagination from "@mui/material/Pagination";
import usePagination from "@/hooks/UsePagination";
import { Context } from "@/providers/ContextProvider";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/configuration/firebase-config";
import { toast } from "react-toastify";
import { IoSearch } from "react-icons/io5";
import { utils as XLSXUtils, write as XLSXWrite } from "xlsx";

export default function ERPDetailsPage({ params }) {
  const { lang } = use(params);
  const { erpDownloads } = useContext(Context);
  
  // Debug logging
  console.log("ERP Downloads in component:", erpDownloads);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [sortColumn, setSortColumn] = useState({
    path: "Name",
    order: "asc",
  });

  const {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    setcurrentPageIndex,
    displayPage,
  } = usePagination(20, (erpDownloads || []).length);

  const leads = filteredLeads.length > 0 ? filteredLeads : (erpDownloads || []);
  leads.sort((a, b) => {
    const valueA = a[sortColumn.path];
    const valueB = b[sortColumn.path];
    const comparison =
      sortColumn.path === "timestamp"
        ? valueA.toDate() - valueB.toDate()
        : valueA?.localeCompare(valueB) || 0;
    return sortColumn.order === "asc" ? comparison : -comparison;
  });

  const currentLeads = leads.slice(startPageIndex, endPageIndex);

  const leadsContent = {
    en: {
      deleteConfirm: "Are you sure you want to delete this lead?",
      deleteSuccess: "Lead deleted successfully.",
      noLeadsFound: "No leads found.",
    },
    ar: {
      deleteConfirm: "هل أنت متأكد أنك تريد حذف هذا العميل المحتمل؟",
      deleteSuccess: "تم حذف العميل المحتمل بنجاح.",
      noLeadsFound: "لم يتم العثور على عملاء محتملين.",
    },
  };

  const labels = {
    en: {
      title: "Next ERP Download Leads",
      searchPlaceholder: "Search by name or email",
      table: {        email: "Email",
        phone: "Phone",
        company: "Company",
        vat: "VAT Number",
        industry: "Industry",
        timestamp: "Date & Time",
        action: "Action",
      },
      noLeads: "No Download Leads",
    },
    ar: {
      title: "عملاء تحميل نكست ERP المحتملين",
      searchPlaceholder: "ابحث بالاسم أو البريد الإلكتروني",
      table: {
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        company: "الشركة",
        vat: "رقم ضريبة القيمة المضافة",
        industry: "المجال",
        timestamp: "التاريخ والوقت",
        action: "الإجراء",
      },
      noLeads: "لا توجد عملاء محتملين",
    },
  };

  const t = labels[lang] || labels.en;
  const c = leadsContent[lang] || leadsContent.en;

  const deleteLead = async (id) => {
    const confirm = window.confirm(c.deleteConfirm);
    if (confirm) {
      if (currentLeads.length === 1 && (erpDownloads || []).length > 20) {
        setcurrentPageIndex(currentPageIndex - 1);
      }
      await deleteDoc(doc(db, "erpDownloads", id));
      toast.success(c.deleteSuccess);
    }
  };

  const filterLeadsBySearch = (e) => {
    e.preventDefault();
    const filtered = (erpDownloads || []).filter((lead) =>
      lead.Name?.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
    if (filtered.length > 0) {
      setFilteredLeads(filtered);
      setcurrentPageIndex(1);
    } else {
      toast(c.noLeadsFound);
    }
  };

  const handleSort = (path) => {
    if (sortColumn.path === path) {
      setSortColumn({
        ...sortColumn,
        order: sortColumn.order === "asc" ? "desc" : "asc",
      });
    } else setSortColumn({ path: path, order: "asc" });
  };

  const getSortIcon = (path) => {
    if (sortColumn.path === path) {
      return sortColumn.order === "asc" ? (
        <i className="fa fa-sort-asc text-dark"></i>
      ) : (
        <i className="fa fa-sort-desc text-dark"></i>
      );
    }
    return null;
  };

  const exportToExcel = () => {
    const exportData = (erpDownloads || []).map((lead) => ({
      [t.table.name]: lead.Name || "—",
      [t.table.email]: lead.email || "—",
      [t.table.phone]: lead.phone || "—",
      [t.table.company]: lead.company || "—",
      [t.table.vat]: lead.vat || "—",
      [t.table.industry]: lead.industry || "—",
      [t.table.timestamp]:
        lead.timestamp?.toDate().toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }) || "—",
    }));

    const worksheet = XLSXUtils.json_to_sheet(exportData);
    const workbook = XLSXUtils.book_new();
    
    // Set column widths
    const colWidths = [
      { wch: 20 }, // Name
      { wch: 25 }, // Email
      { wch: 15 }, // Phone
      { wch: 20 }, // Company
      { wch: 20 }, // VAT
      { wch: 18 }, // Industry
      { wch: 25 }, // Timestamp
    ];
    worksheet["!cols"] = colWidths;

    // Style header row
    const headerStyle = {
      fill: { fgColor: { rgb: "1F4788" } },
      font: { bold: true, color: { rgb: "FFFFFF" }, size: 12 },
      alignment: { horizontal: "center", vertical: "center" },
      border: {
        top: { style: "thin" },
        bottom: { style: "thin" },
        left: { style: "thin" },
        right: { style: "thin" },
      },
    };

    for (let i = 0; i < Object.keys(exportData[0] || {}).length; i++) {
      const cellAddress = XLSXUtils.encode_cell({ r: 0, c: i });
      if (worksheet[cellAddress]) {
        worksheet[cellAddress].s = headerStyle;
      }
    }

    XLSXUtils.book_append_sheet(workbook, worksheet, "ERP Leads");
    XLSXWrite(workbook, {
      bookType: "xlsx",
      type: "binary",
      filename: `erp-leads-${new Date().toISOString().split("T")[0]}.xlsx`,
    });

    // Trigger download
    const wbout = XLSXWrite(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([wbout], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `erp-leads-${new Date().toISOString().split("T")[0]}.xlsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast.success(lang === "ar" ? "تم تحميل الملف بنجاح" : "File downloaded successfully");
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredLeads([]);
    }
  }, [searchQuery]);

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "16px",
        borderRadius: "18px",
        border: "1px solid rgba(227, 227, 227, 1)",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h4>{t.title}</h4>
        {(erpDownloads || []).length > 0 && (
          <button
            onClick={exportToExcel}
            className="primaryButton border-0"
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <i className="fa fa-download"></i>
            {lang === "ar" ? "تحميل Excel" : "Download Excel"}
          </button>
        )}
      </div>
      {(erpDownloads || []).length > 0 ? (
        <>
          <form
            onSubmit={filterLeadsBySearch}
            className="w-md-75 mb-5 position-relative"
          >
            <input
              type="search"
              placeholder={t.searchPlaceholder}
              className="form-control"
              style={{
                height: "50px",
                paddingRight: lang === "en" ? "80px" : undefined,
                paddingLeft: lang === "ar" ? "80px" : undefined,
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
            <button
              type="submit"
              className="primaryButton border-0"
              style={{
                borderRadius: "8px",
                position: "absolute",
                right: lang === "en" ? "8px" : "auto",
                left: lang === "ar" ? "8px" : "auto",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <IoSearch style={{ width: "20px", height: "20px" }} />
            </button>
          </form>
          <div className="table-responsive mb-5">
            <table
              className="table table-hover table-borderless"
              style={{ whiteSpace: "nowrap" }}
            >
              <thead>
                <tr>
                  <th
                    className="text-secondary cursor-pointer"
                    onClick={() => handleSort("Name")}
                  >
                    <h6>
                      {t.table.name} {getSortIcon("Name")}
                    </h6>
                  </th>
                  <th
                    className="text-secondary cursor-pointer"
                    onClick={() => handleSort("email")}
                  >
                    <h6>
                      {t.table.email} {getSortIcon("email")}
                    </h6>
                  </th>
                  <th
                    className="text-secondary cursor-pointer"
                    onClick={() => handleSort("phone")}
                  >
                    <h6>
                      {t.table.phone} {getSortIcon("phone")}
                    </h6>
                  </th>
                  <th
                    className="text-secondary cursor-pointer"
                    onClick={() => handleSort("company")}
                  >
                    <h6>
                      {t.table.company} {getSortIcon("company")}
                    </h6>
                  </th>
                  <th
                    className="text-secondary cursor-pointer"
                    onClick={() => handleSort("vat")}
                  >
                    <h6>
                      {t.table.vat} {getSortIcon("vat")}
                    </h6>
                  </th>
                  <th
                    className="text-secondary cursor-pointer"
                    onClick={() => handleSort("industry")}
                  >
                    <h6>
                      {t.table.industry} {getSortIcon("industry")}
                    </h6>
                  </th>
                  <th
                    className="text-secondary cursor-pointer"
                    onClick={() => handleSort("timestamp")}
                  >
                    <h6>
                      {t.table.timestamp} {getSortIcon("timestamp")}
                    </h6>
                  </th>
                  <th className="text-secondary">
                    <h6>{t.table.action}</h6>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentLeads.map((lead, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <h6>{lead.Name || "—"}</h6>
                      </div>
                    </td>
                    <td>{lead.email || "—"}</td>
                    <td>{lead.phone || "—"}</td>
                    <td style={{ minWidth: "150px" }}>
                      {lead.company || "—"}
                    </td>
                    <td>{lead.vat || "—"}</td>
                    <td style={{ textTransform: "capitalize" }}>
                      {lead.industry || "—"}
                    </td>
                    <td>
                      {lead.timestamp?.toDate().toLocaleString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }) || "—"}
                    </td>
                    <td>
                      <div
                        className="primaryButton d-inline-block py-1 px-2"
                        onClick={() => deleteLead(lead.id)}
                      >
                        <i className="fa fa-trash"></i>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {(erpDownloads || []).length > 20 && (
            <div className="d-flex justify-content-center">
              <Pagination
                count={totalPages}
                page={currentPageIndex}
                onChange={(event, page) => displayPage(page)}
                className="custom-pagination"
              />
            </div>
          )}
        </>
      ) : (
        <h6 className="text-center my-5">{t.noLeads}</h6>
      )}
    </div>
  );
}