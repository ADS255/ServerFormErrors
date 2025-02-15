class ServerFormErrors {
  static defaultConfig = {};

  static initForm(formSelector) {}

  static handleErrors(formSelector, errors) {
    const form = document.querySelector(formSelector);
    if (!form) return;

    form
      .querySelectorAll(".sfe-error")
      .forEach((el) => el.classList.remove("sfe-error"));

    form.querySelectorAll(".sfe-error-message").forEach((el) => el.remove());

    Object.entries(errors).forEach(([field, message]) => {
      let input = form.querySelector(`[name="${field}"]`);
      if (input) {
        input.classList.add("sfe-error");

        let span = document.createElement("span");
        span.classList.add("sfe-error-message");
        span.textContent = message;

        input.parentNode.insertBefore(span, input.nextSibling);
      }
    });
  }
}
