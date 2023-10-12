/* Styles for larger screens */
body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    padding: 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    background-color: #333;
    color: #fff;
    padding: 10px 0;
    text-align: center;
}

header h1 {
    font-size: 36px;
}

#search-form {
    margin-top: 20px;
}

#search-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
    font-size: 16px;
}

#search-form button {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 16px;
}

main {
    background-color: #fff;
    padding: 20px;
    margin: 20px auto;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    font-size: 24px;
}

#search-results {
    margin-top: 20px;
    font-size: 18px;
    color: #333;
}

/* Styles for smaller screens (mobile) */
@media (max-width: 767px) {
    header h1 {
        font-size: 24px;
    }

    #search-form {
        margin-top: 10px;
        text-align: center;
    }

    #search-input {
        width: 100%;
    }

    #search-form button {
        display: block;
        width: 100%;
        margin-top: 10px;
        border-radius: 5px;
    }

    main {
        padding: 10px;
    }

    h2 {
        font-size: 22px;
    }

    #search-results {
        font-size: 16px;
    }
}
