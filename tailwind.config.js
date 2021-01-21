module.exports = {
    purge: [
        //     './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'ubuntu': ["'Ubuntu'", 'sans-serif']
            },
        },
    },
    variants: {
        extend: {
            // tableLayout: ['hover', 'focus'],
            // divideColor: ['group-hover'],
            // display: ['hover', 'focus'],
            borderRadius: ['first', 'last'],
        },
    },
    plugins: [],
}