module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true
    },
    "extends": "airbnb",
    "globals": {
        "Drupal": true,
        "drupalSettings": true,
        "drupalTranslations": true,
        "domready": true,
        "jQuery": true,
        "_": true,
        "matchMedia": true,
        "Backbone": true,
        "Modernizr": true,
        "CKEDITOR": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-console": "off",
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/jsx-uses-react": [2],
        "react/jsx-uses-vars": [2],
        "react/react-in-jsx-scope": [2],
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": true
            },
        ],
    },
};
