"use client";

import React, { useState, useEffect, use } from "react";
import { db } from "@/configuration/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { FaTrash, FaPlus } from "react-icons/fa";

export default function ManageOffers({ params }) {
  const { lang } = use(params);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeLang, setActiveLang] = useState(lang || "en");
  const [newOffer, setNewOffer] = useState({
    image: null,
    title: { en: "", ar: "" },
    description: { en: "", ar: "" },
  });

  const labels = {
    en: {
      title: "Manage Offers",
      addOffer: "Add New Offer",
      image: "Offer Image",
      offerTitle: "Title",
      description: "Description",
      add: "Add Offer",
      adding: "Adding...",
      delete: "Delete",
      currentOffers: "Current Offers",
      noOffers: "No offers available",
      langSelect: "Content Language",
    },
    ar: {
      title: "إدارة العروض",
      addOffer: "إضافة عرض جديد",
      image: "صورة العرض",
      offerTitle: "العنوان",
      description: "الوصف",
      add: "إضافة عرض",
      adding: "جارٍ الإضافة...",
      delete: "حذف",
      currentOffers: "العروض الحالية",
      noOffers: "لا توجد عروض",
      langSelect: "لغة المحتوى",
    },
  };

  const ui = labels[lang] || labels.en;

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const offersRef = collection(db, "offers");
      const q = query(offersRef, orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);
      const offersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOffers(offersData);
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  const handleImageChange = (e) => {
    setNewOffer((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
    setTimeout(() => {
      e.target.value = "";
    }, 0);
  };

  const handleFieldChange = (field, value) => {
    setNewOffer((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [activeLang]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (!newOffer.image) {
        toast.error(lang === "ar" ? "الرجاء إضافة صورة" : "Please add an image");
        return;
      }

      const storageId = nanoid();
      const formData = new FormData();
      formData.append("file", newOffer.image);
      formData.append("path", `offers/${storageId}`);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Image upload failed");
      }

      const data = await res.json();
      const imageURL = data.url;

      const offersRef = collection(db, "offers");
      await addDoc(offersRef, {
        ...newOffer,
        storageId,
        image: imageURL,
        timestamp: serverTimestamp(),
      });

      toast.success(
        lang === "ar" ? "تم إضافة العرض بنجاح" : "Offer added successfully"
      );

      setNewOffer({
        image: null,
        title: { en: "", ar: "" },
        description: { en: "", ar: "" },
      });

      fetchOffers();
    } catch (error) {
      console.error("Error adding offer:", error);
      toast.error(lang === "ar" ? "فشل في إضافة العرض" : "Failed to add offer");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (offer) => {
    if (
      !window.confirm(
        lang === "ar" ? "هل تريد حذف هذا العرض؟" : "Delete this offer?"
      )
    ) {
      return;
    }

    try {
      // Delete image from storage
      if (offer.storageId) {
        await fetch("/api/delete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ path: `offers/${offer.storageId}` }),
        });
      }

      // Delete from Firestore
      await deleteDoc(doc(db, "offers", offer.id));

      toast.success(
        lang === "ar" ? "تم حذف العرض" : "Offer deleted successfully"
      );
      fetchOffers();
    } catch (error) {
      console.error("Error deleting offer:", error);
      toast.error(lang === "ar" ? "فشل في الحذف" : "Failed to delete");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 className="mb-4">{ui.title}</h2>

      {/* Add New Offer Form */}
      <div
        style={{
          backgroundColor: "white",
          padding: "1.5rem",
          borderRadius: "12px",
          marginBottom: "2rem",
          border: "1px solid #e3e3e3",
        }}
      >
        <h2 className="mb-4">{ui.addOffer}</h2>

        <div className="mb-4" style={{ maxWidth: "200px" }}>
          <label className="form-label">{ui.langSelect}</label>
          <select
            className="form-select"
            value={activeLang}
            onChange={(e) => setActiveLang(e.target.value)}
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Image Upload */}
          <div className="mb-4">
            <label className="form-label">{ui.image}</label>
            {newOffer.image && (
              <img
                src={URL.createObjectURL(newOffer.image)}
                alt="Preview"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "8px",
                  marginBottom: "1rem",
                }}
              />
            )}
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
              required={!newOffer.image}
            />
          </div>

          {/* Title */}
          <div className="mb-3">
            <label className="form-label">{ui.offerTitle}</label>
            <input
              type="text"
              className="form-control"
              value={newOffer.title[activeLang]}
              onChange={(e) => handleFieldChange("title", e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="form-label">{ui.description}</label>
            <textarea
              className="form-control"
              rows="4"
              value={newOffer.description[activeLang]}
              onChange={(e) => handleFieldChange("description", e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <FaPlus /> {loading ? ui.adding : ui.add}
          </button>
        </form>
      </div>

      {/* Current Offers */}
      <div
        style={{
          backgroundColor: "white",
          padding: "1.5rem",
          borderRadius: "12px",
          border: "1px solid #e3e3e3",
        }}
      >
        <h2 className="mb-4">{ui.currentOffers}</h2>

        {offers.length > 0 ? (
          <div className="row g-3">
            {offers.map((offer) => (
              <div key={offer.id} className="col-lg-4 col-md-6">
                <div
                  style={{
                    border: "1px solid #e3e3e3",
                    borderRadius: "8px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={offer.image}
                    alt={offer.title?.en || "Offer"}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "1rem" }}>
                    <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                      {offer.title?.en || ""}
                    </h2>
                    <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "1rem" }}>
                      {offer.description?.en || ""}
                    </p>
                    <button
                      onClick={() => handleDelete(offer)}
                      className="btn btn-danger btn-sm"
                      style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                      <FaTrash /> {ui.delete}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "#999" }}>{ui.noOffers}</p>
        )}
      </div>
    </div>
  );
}
