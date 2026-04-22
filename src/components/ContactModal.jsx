import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useLanguage } from "../contexts/LanguageContext";

const ContactModal = ({ open, onClose }) => {
	const [shouldRender, setShouldRender] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		topic: "",
		description: "",
	});
	const [isSending, setIsSending] = useState(false);
	const { t } = useLanguage();
	const ANIM_MS = 300;

	const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
	const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
	const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

	useEffect(() => {
		let timer;

		if (open) {
			setShouldRender(true);
			timer = setTimeout(() => setIsVisible(true), 10);
		} else if (shouldRender) {
			setIsVisible(false);
			timer = setTimeout(() => setShouldRender(false), ANIM_MS + 10);
		}

		return () => clearTimeout(timer);
	}, [open, shouldRender]);

	useEffect(() => {
		if (!shouldRender) return;

		const handleEsc = (event) => {
			if (event.key === "Escape") {
				handleCloseClick();
			}
		};

		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleEsc);

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", handleEsc);
		};
	}, [shouldRender]);

	if (!shouldRender) return null;

	const handleCloseClick = () => {
		setIsVisible(false);
		setTimeout(() => {
			setShouldRender(false);
			onClose();
		}, ANIM_MS + 10);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((previous) => ({
			...previous,
			[name]: value,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
			toast.error(t("contactModal.toasts.emailServiceMissing"), { position: "top-right" });
			return;
		}

		try {
			setIsSending(true);

			await emailjs.send(
				SERVICE_ID,
				TEMPLATE_ID,
				{
					to_email: "augurusaagustin@gmail.com",
					from_name: formData.email,
					from_email: formData.email,
					subject: formData.topic,
					message: formData.description,
				},
				{ publicKey: PUBLIC_KEY }
			);

			toast.success(t("contactModal.toasts.success"), { position: "top-right" });
			setFormData({ email: "", topic: "", description: "" });
			handleCloseClick();
		} catch {
			toast.error(t("contactModal.toasts.error"), { position: "top-right" });
		} finally {
			setIsSending(false);
		}
	};

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-300 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			<button
				type="button"
				onClick={handleCloseClick}
				aria-label={t("contactModal.closeAria")}
				className="absolute inset-0 z-0 bg-[#050814]"
			/>

			<div
				className={`relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-sky-400/40 bg-[#050814] p-6 shadow-[0_0_32px_rgba(56,189,248,0.35)] transition-all duration-300 sm:p-8 ${
					isVisible ? "translate-y-0 scale-100" : "translate-y-4 scale-[0.98]"
				}`}
			>
				<div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-900/20 via-[#050814] to-[#050814]" />

				<button
					type="button"
					onClick={handleCloseClick}
					className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900/80 text-lg text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
					aria-label={t("contactModal.closeAria")}
				>
					X
				</button>

				<p className="text-xs uppercase tracking-[0.22em] text-sky-300/80">{t("contactModal.eyebrow")}</p>
				<h2 className="mt-2 font-impact text-3xl uppercase tracking-[0.14em] text-white sm:text-4xl">
					{t("contactModal.title")}
				</h2>
				<p className="mt-2 text-sm leading-relaxed text-slate-200/80">
					{t("contactModal.description")}
				</p>

				<form className="mt-6 space-y-4" onSubmit={handleSubmit}>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						required
						placeholder={t("contactModal.fields.email")}
						autoComplete="email"
						className="contact-input w-full rounded-lg border border-sky-300/35 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-300/55 focus:border-sky-400 focus:outline-none"
					/>

					<input
						type="text"
						name="topic"
						value={formData.topic}
						onChange={handleInputChange}
						required
						placeholder={t("contactModal.fields.topic")}
						autoComplete="off"
						className="contact-input w-full rounded-lg border border-sky-300/35 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-300/55 focus:border-sky-400 focus:outline-none"
					/>

					<textarea
						name="description"
						value={formData.description}
						onChange={handleInputChange}
						required
						rows={5}
						placeholder={t("contactModal.fields.description")}
						autoComplete="off"
						className="contact-textarea w-full resize-none rounded-lg border border-sky-300/35 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-300/55 focus:border-sky-400 focus:outline-none"
					/>

					<button
						type="submit"
						disabled={isSending}
						className="group relative block w-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all duration-200 drop-shadow-[0_0_12px_rgba(56,189,248,0.55)] disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
					>
						<div className="absolute inset-0 -z-10 rounded-xl bg-sky-500/70 shadow-[0_0_28px_rgba(56,189,248,0.55)] transition-all duration-200 group-hover:bg-sky-400/75" />
						<span className="relative">{isSending ? t("contactModal.buttons.sending") : t("contactModal.buttons.send")}</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default ContactModal;
