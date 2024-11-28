export class SiblingsValidator {
  private punctuation = /^[^\p{P}]$/u;

  public validateBeforeTag(el: HTMLInputElement | null): boolean {
    return Boolean(
      el?.previousElementSibling?.tagName === "SPAN" ||
        (el?.previousElementSibling?.textContent &&
          el.previousElementSibling?.textContent.match(this.punctuation)),
    );
  }

  public validateNextTag(el: HTMLInputElement | null): boolean {
    return Boolean(
      el?.nextElementSibling?.tagName === "SPAN" ||
        (el?.nextElementSibling?.textContent &&
          el.nextElementSibling?.textContent.match(this.punctuation)),
    );
  }
}

const siblingsValidator = new SiblingsValidator();
export default siblingsValidator;
