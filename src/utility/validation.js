


export const validateProductFrom = (fieldName, fieldValue) => {
    const errors = {};

    if (fieldName === "productName" && !fieldValue.trim()) {
        errors.title = "Product Name is mandatory";
    }

    return errors;
};
