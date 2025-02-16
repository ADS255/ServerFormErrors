class ServerFormErrors {
  static defaultConfig = {};

  constructor(formSelector) {
    this.form = document.querySelector(formSelector);

    if (!this.form) return;
  }

  handleErrors(errors) {
    this.form
      .querySelectorAll(".sfe-error")
      .forEach((el) => el.classList.remove("sfe-error"));

    this.form
      .querySelectorAll(".sfe-error-message")
      .forEach((el) => el.remove());

    Object.entries(errors).forEach(([field, message]) => {
      let input = this.form.querySelector(`[name="${field}"]`);
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
