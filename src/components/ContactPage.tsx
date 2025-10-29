import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner@2.0.3";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("تم إرسال رسالتك بنجاح!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <SEO
        title="اتصل بنا - اليوم ميديا"
        description="تواصل معنا في اليوم ميديا. نحن هنا للإجابة على استفساراتك واقتراحاتك"
        keywords="اتصل بنا، تواصل، اليوم ميديا، خدمة العملاء"
        canonicalUrl="https://todaymedia.net/contact"
      />
      <Header />

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8 max-w-[85.375rem]">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl mb-4 text-gray-900 dark:text-white">
              اتصل بنا
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              نرحب بتعليقاتكم واقتراحاتكم لجميع الاستفسارات.. لا
              تتردد بالتواصل معنا
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Information Cards */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-right">
              <div className="flex justify-end mb-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-[#c90000]" />
                </div>
              </div>
              <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                البريد الإلكتروني
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                info@todaymedia.net
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                contact@todaymedia.net
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-right">
              <div className="flex justify-end mb-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-[#c90000]" />
                </div>
              </div>
              <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                الهاتف
              </h3>
              <p
                className="text-gray-600 dark:text-gray-400 text-sm"
                dir="ltr"
              >
                +44 20 1234 5678
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 text-sm"
                dir="ltr"
              >
                +44 20 8765 4321
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-right">
              <div className="flex justify-end mb-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-[#c90000]" />
                </div>
              </div>
              <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                العنوان
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Arab Media House
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                London, United Kingdom
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl mb-6 text-right text-gray-900 dark:text-white">
                أرسل لنا رسالة
              </h2>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-right">
                    <Label
                      htmlFor="name"
                      className="block mb-2"
                    >
                      الاسم الكامل{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full text-right"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div className="text-right">
                    <Label
                      htmlFor="email"
                      className="block mb-2"
                    >
                      البريد الإلكتروني{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full text-right"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-right">
                    <Label
                      htmlFor="phone"
                      className="block mb-2"
                    >
                      رقم الهاتف
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full text-right"
                      placeholder="05xxxxxxxx"
                    />
                  </div>

                  <div className="text-right">
                    <Label
                      htmlFor="subject"
                      className="block mb-2"
                    >
                      الموضوع{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full text-right"
                      placeholder="موضوع الرسالة"
                    />
                  </div>
                </div>

                <div className="text-right">
                  <Label
                    htmlFor="message"
                    className="block mb-2"
                  >
                    الرسالة{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full text-right resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>

                <div className="text-right">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#c90000] hover:bg-[#a00000] text-white px-8 py-3"
                  >
                    {isSubmitting ? (
                      "جاري الإرسال..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        إرسال الرسالة
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>

            {/* Additional Information */}
            <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg text-right">
              <h3 className="text-lg mb-3 text-gray-900 dark:text-white">
                ملاحظة مهمة
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  • سنقوم بالرد على رسالتك خلال 24-48 ساعة عمل
                </li>
                <li>
                  • تأكد من إدخال بريد إلكتروني صحيح للتواصل معك
                </li>
                <li>
                  • للاستفسارات العاجلة، يرجى التواصل عبر الهاتف
                </li>
                <li>• جميع الحقول المميزة بـ (*) إلزامية</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}