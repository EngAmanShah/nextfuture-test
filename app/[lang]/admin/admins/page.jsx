"use client";
import React, { useContext, use } from "react";
import { Context } from "@/providers/ContextProvider";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useAuth from "@/hooks/UseAuth";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function AdminsPage({ params }) {
  const { lang } = use(params);
  const { user } = useAuth();
  const router = useRouter();
  const { admins } = useContext(Context);
  const PRIMARY_ADMIN_UID = "pZPjz7ZmQNeWGmTYpY1YqnZRVTF3";

  console.log("AdminsPage - Admins from context:", admins);
  console.log("AdminsPage - Current user:", user);

  const primaryAdmin = admins?.find((admin) => admin.id === PRIMARY_ADMIN_UID);

  const filteredAdmins = (admins || []).filter(
    (admin) => admin.id !== PRIMARY_ADMIN_UID
  );

  const sortedAdmins = [...filteredAdmins].sort((a, b) => {
    if (a.createdAt && b.createdAt) {
      return a.createdAt.toMillis() - b.createdAt.toMillis();
    }
    if (!a.createdAt) return 1;
    if (!b.createdAt) return -1;
    return 0;
  });

  // Show loading state if admins is null/undefined
  if (!admins) {
    return (
      <div className="container-fluid">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading administrators...</p>
        </div>
      </div>
    );
  }

  const content = {
    en: {
      title: "Administrator Management",
      subtitle: "Manage administrator accounts and permissions",
      removeConfirm: (name) =>
        `Are you sure you want to remove admin "${name}"?`,
      remove: "Remove",
      noAdmins: "No Admins",
      createdAt: "Created At",
      name: "Name",
      email: "Email",
      removedSuccess: "Admin removed successfully",
      removedError: "Failed to remove admin",
      actions: "Actions",
      primaryAdmin: "Primary Admin",
      totalAdmins: "Total Administrators",
      addNew: "Add New Admin",
      edit: "Edit",
    },
    ar: {
      title: "إدارة المشرفين",
      subtitle: "إدارة حسابات المشرفين والصلاحيات",
      removeConfirm: (name) => `هل أنت متأكد أنك تريد إزالة المسؤول "${name}"؟`,
      remove: "إزالة",
      noAdmins: "لا يوجد مسؤولون",
      createdAt: "تاريخ الإنشاء",
      name: "الاسم",
      email: "البريد الإلكتروني",
      removedSuccess: "تمت إزالة المسؤول بنجاح",
      removedError: "فشل في إزالة المسؤول",
      actions: "الإجراءات",
      primaryAdmin: "المشرف الرئيسي",
      totalAdmins: "إجمالي المشرفين",
      addNew: "إضافة مشرف جديد",
      edit: "تعديل",
    },
  };

  const t = content[lang] || content.en;

  const handleRemoveAdmin = async (uid, adminName) => {
    const confirmed = window.confirm(t.removeConfirm(adminName));
    if (!confirmed) return;

    try {
      const res = await fetch("/api/remove-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(t.removedSuccess);
      } else {
        toast.error(data.error || t.removedError);
      }
    } catch (err) {
      console.error(err);
      toast.error(t.removedError);
    }
  };

  return (
    <div className="container-fluid">
      <div className="mb-4">
        <h2 className="fw-bold mb-2">{t.title}</h2>
        <p className="text-muted">{t.subtitle}</p>
      </div>

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">{t.totalAdmins}</p>
                  <h3 className="fw-bold mb-0">{(admins || []).length}</h3>
                </div>
                <div
                  className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center"
                  style={{ width: "50px", height: "50px" }}
                >
                  <SupervisorAccountIcon className="text-primary" style={{ fontSize: 28 }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 d-flex align-items-center justify-content-end">
          <Link
            href={`/${lang}/admin/add-admin`}
            className="btn btn-primary d-flex align-items-center gap-2"
          >
            <AddIcon />
            {t.addNew}
          </Link>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          {(admins || []).length > 0 ? (
            <div className="table-responsive">
              <table
                className="table table-striped table-bordered"
                style={{ whiteSpace: "nowrap" }}
              >
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>{t.name}</th>
                    <th>{t.email}</th>
                    <th>{t.createdAt}</th>
                    <th>{t.actions}</th>
                  </tr>
                </thead>
                <tbody>
                  {primaryAdmin && (
                    <tr style={{ backgroundColor: "#f8f9fa" }}>
                      <td>
                        <strong>*</strong>
                      </td>
                      <td>
                        <strong>{primaryAdmin.name}</strong>
                        <br />
                        <small className="text-muted">{t.primaryAdmin}</small>
                      </td>
                      <td>{primaryAdmin.email}</td>
                      <td>
                        {primaryAdmin.createdAt
                          ? primaryAdmin.createdAt.toDate().toLocaleString()
                          : "—"}
                      </td>
                      <td>
                        <span className="text-muted">Protected</span>
                      </td>
                    </tr>
                  )}
                  {sortedAdmins.map((admin, index) => (
                    <tr key={admin.id}>
                      <td>{index + 1}</td>
                      <td>{admin.name}</td>
                      <td>{admin.email}</td>
                      <td>
                        {admin.createdAt
                          ? admin.createdAt.toDate().toLocaleString()
                          : "—"}
                      </td>
                      <td>
                        {user?.uid === PRIMARY_ADMIN_UID && (
                          <div className="d-flex gap-2">
                            <Link
                              href={`/${lang}/admin/edit-admin/${admin.id}`}
                              className="btn btn-sm btn-outline-primary"
                            >
                              <EditIcon fontSize="small" />
                              {t.edit}
                            </Link>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() =>
                                handleRemoveAdmin(admin.id, admin.name)
                              }
                            >
                              <DeleteIcon fontSize="small" />
                              {t.remove}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-5">
              <SupervisorAccountIcon
                style={{ fontSize: 64, color: "#dee2e6" }}
                className="mb-3"
              />
              <h5 className="text-muted mb-3">{t.noAdmins}</h5>
              <Link
                href={`/${lang}/admin/add-admin`}
                className="btn btn-primary"
              >
                <AddIcon className="me-2" />
                {t.addNew}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
