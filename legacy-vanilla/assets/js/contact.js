/* ==========================================================================
   Universe — contact.js
   Frontend-only form validation, success state and email copy
   ========================================================================== */

(() => {
  "use strict";

  const form = document.querySelector("[data-contact-form]");
  const successPanel = document.querySelector("[data-form-success]");
  const successName = document.querySelector("[data-success-name]");
  const toast = document.querySelector("[data-toast]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let toastTimer = null;

  const showToast = (message) => {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("is-visible");

    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 2400);
  };

  /* ------------------------------------------------------------------------
     Copy email
     ---------------------------------------------------------------------- */
  const copyButton = document.querySelector("[data-copy-email]");

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const email = copyButton.dataset.copyEmail;
      if (!email) return;

      try {
        if (!navigator.clipboard) throw new Error("Clipboard unavailable");
        await navigator.clipboard.writeText(email);
        showToast("Đã sao chép email");
      } catch {
        showToast("Không thể sao chép — bạn có thể chọn email và copy thủ công.");
      }
    });
  }

  /* ------------------------------------------------------------------------
     Form validation
     ---------------------------------------------------------------------- */
  if (form) {
    const fields = Array.from(form.querySelectorAll("[data-field]"));
    const submitButton = form.querySelector('button[type="submit"]');
    const resetButton = successPanel
      ? successPanel.querySelector("[data-form-reset]")
      : null;
    const successHeading = successPanel
      ? successPanel.querySelector("h2")
      : null;

    const rules = {
      name: (value) =>
        value.trim().length >= 2
          ? true
          : "Vui lòng nhập họ và tên (ít nhất 2 ký tự).",
      email: (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
          ? true
          : "Email chưa đúng định dạng.",
      project: (value) =>
        value.trim().length > 0 ? true : "Vui lòng chọn loại dự án.",
      message: (value) =>
        value.trim().length >= 10
          ? true
          : "Hãy chia sẻ thêm một chút về dự án (ít nhất 10 ký tự).",
    };

    const getInput = (field) =>
      field.querySelector("input, select, textarea");

    const setError = (field, input, message) => {
      field.classList.add("has-error");
      input.setAttribute("aria-invalid", "true");

      const error = field.querySelector(".field__error");
      if (error) error.textContent = message;
    };

    const clearError = (field, input) => {
      field.classList.remove("has-error");
      input.removeAttribute("aria-invalid");

      const error = field.querySelector(".field__error");
      if (error) error.textContent = "";
    };

    const validateField = (field) => {
      const input = getInput(field);
      if (!input) return true;

      const rule = rules[input.name];
      if (!rule) return true;

      const result = rule(input.value);

      if (result === true) {
        clearError(field, input);
        return true;
      }

      setError(field, input, result);
      return false;
    };

    fields.forEach((field) => {
      const input = getInput(field);
      if (!input || !rules[input.name]) return;

      const eventName = input.tagName === "SELECT" ? "change" : "input";

      input.addEventListener(eventName, () => {
        if (field.classList.contains("has-error")) {
          validateField(field);
        }
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      let firstInvalid = null;

      fields.forEach((field) => {
        const valid = validateField(field);
        if (!valid && !firstInvalid) {
          firstInvalid = getInput(field);
        }
      });

      if (firstInvalid) {
        firstInvalid.focus({ preventScroll: true });
        firstInvalid.scrollIntoView({
          behavior: reduceMotion.matches ? "auto" : "smooth",
          block: "center",
        });
        return;
      }

      if (!submitButton) return;

      const originalButtonMarkup = submitButton.innerHTML;
      const senderName = (form.elements.name.value || "").trim();

      submitButton.disabled = true;
      submitButton.textContent = "Đang gửi…";

      // No backend in this demo — simulate a short request.
      window.setTimeout(() => {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonMarkup;

        form.reset();
        fields.forEach((field) => {
          const input = getInput(field);
          if (input) clearError(field, input);
        });

        form.hidden = true;

        if (successPanel) {
          if (successName) successName.textContent = senderName;
          successPanel.classList.add("is-visible");

          if (successHeading) {
            successHeading.focus({ preventScroll: true });
          }

          successPanel.scrollIntoView({
            behavior: reduceMotion.matches ? "auto" : "smooth",
            block: "center",
          });
        }
      }, 800);
    });

    if (resetButton && successPanel) {
      resetButton.addEventListener("click", () => {
        successPanel.classList.remove("is-visible");
        form.hidden = false;

        const nameInput = form.querySelector('input[name="name"]');
        if (nameInput) nameInput.focus({ preventScroll: true });

        form.scrollIntoView({
          behavior: reduceMotion.matches ? "auto" : "smooth",
          block: "center",
        });
      });
    }
  }
})();
