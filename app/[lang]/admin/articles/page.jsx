"use client";
import React, { useContext, useEffect, use } from "react";
import { Context } from "@/providers/ContextProvider";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/configuration/firebase-config";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Pagination from "@mui/material/Pagination";
import usePagination from "@/hooks/UsePagination";
import Link from "next/link";
import { FaEye, FaTrash, FaPencilAlt } from "react-icons/fa";

export default function Articles({ params }) {
  const { lang } = use(params);
  const { articles } = useContext(Context);
  const router = useRouter();

  const {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    setcurrentPageIndex,
    displayPage,
  } = usePagination(20, articles.length);

  const currentArticles = articles.slice(startPageIndex, endPageIndex);

  const translations = {
    en: {
      title: "Content Management",
      subtitle: "Manage your articles and blog posts",
      articles: "Articles",
      add: "Add New Article",
      noArticles: "No articles yet. Start creating your first article!",
      view: "View",
      edit: "Edit",
      delete: "Delete",
      confirmDelete: "Are you sure you want to delete this article?",
      deletedSuccess: "Article deleted successfully.",
      deletedFail: "Failed to delete article",
      total: "Total Articles",
      search: "Search articles...",
      published: "Published",
      draft: "Draft",
    },
    ar: {
      title: "إدارة المحتوى",
      subtitle: "إدارة المقالات والمنشورات",
      articles: "المقالات",
      add: "إضافة مقالة جديدة",
      noArticles: "لا توجد مقالات بعد. ابدأ بإنشاء مقالتك الأولى!",
      view: "عرض",
      edit: "تعديل",
      delete: "حذف",
      confirmDelete: "هل أنت متأكد أنك تريد حذف هذه المقالة؟",
      deletedSuccess: "تم حذف المقالة بنجاح.",
      deletedFail: "فشل حذف المقالة",
      total: "إجمالي المقالات",
      search: "البحث عن المقالات...",
      published: "منشور",
      draft: "مسودة",
    },
  };

  const t = translations[lang] || translations.en;

  const handleDelete = async (article) => {
    if (!window.confirm(t.confirmDelete)) return;

    try {
      await fetch("/api/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: `articles/${article.storageId}` }),
      });

      await deleteDoc(doc(db, "articles", article.id));

      toast.success(t.deletedSuccess);
    } catch (error) {
      console.error("Failed to delete article:", error);
      toast.error(t.deletedFail);
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
                  <p className="text-muted mb-1">{t.total}</p>
                  <h3 className="fw-bold mb-0">{articles.length}</h3>
                </div>
                <div
                  className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center"
                  style={{ width: "50px", height: "50px" }}
                >
                  <FaEye className="text-primary" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="fw-semibold mb-0">{t.articles}</h5>
            <button
              className="btn btn-primary d-flex align-items-center gap-2"
              onClick={() => router.push(`/${lang}/admin/add-article`)}
            >
              <span>+</span>
              <span>{t.add}</span>
            </button>
          </div>

          {articles.length === 0 ? (
            <div className="text-center py-5">
              <div className="mb-3">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2V8H20"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h5 className="text-muted">{t.noArticles}</h5>
            </div>
          ) : (
            <>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-4">
                {currentArticles.map((article) => {
                  return (
                    <div className="col" key={article.id}>
                      <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                        <div className="position-relative">
                          <img
                            src={article.image}
                            className="card-img-top"
                            alt={article.title[lang]}
                            style={{
                              height: "200px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="card-body d-flex flex-column">
                          <h6 className="mb-3 clamp-2 fw-semibold flex-grow-1">
                            {article.title[lang]}
                          </h6>
                          <div className="d-flex gap-2">
                            <button
                              className="btn btn-sm btn-outline-primary flex-fill"
                              onClick={() =>
                                router.push(
                                  `/${lang}/article/${article.title["en"].replace(
                                    /\s+/g,
                                    "_"
                                  )}`
                                )
                              }
                              title={t.view}
                            >
                              <FaEye className="me-1" />
                              {t.view}
                            </button>
                            <button
                              className="btn btn-sm btn-outline-warning flex-fill"
                              onClick={() =>
                                router.push(
                                  `/${lang}/admin/edit-article/${article.id}`
                                )
                              }
                              title={t.edit}
                            >
                              <FaPencilAlt className="me-1" />
                              {t.edit}
                            </button>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => handleDelete(article)}
                              title={t.delete}
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {articles.length > 20 && (
                <div className="d-flex justify-content-center mt-4">
                  <Pagination
                    count={totalPages}
                    page={currentPageIndex}
                    onChange={(event, page) => displayPage(page)}
                    color="primary"
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
