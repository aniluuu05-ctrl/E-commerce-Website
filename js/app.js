function showform(FormId){
    document.querySelectorAll(".form-group").forEach(form =>form.classList.remove("active"))
        document.getElementById(FormId).classList.add("active");
    };
