

const plugin = require('tailwindcss/plugin')


module.exports = plugin.withOptions(() => {
    return function ({ addUtilities, theme }) {
        addUtilities({
            '.horizontal-tb': {
                writingMode: 'horizontal-tb',
            },
            '.vertical-rl': {
                writingMode: 'vertical-rl',
            },
            '.vertical-lr': {
                writingMode: 'vertical-lr'
            },
            '.text-orientation': {
                textOrientation: 'upright'
            },
            '.text-gradient': {
                background: 'linear - gradient(to right, #30CFD0 0 %, #330867 100 %)',
	            webkitBackgroundClip: 'text',
	            webkitTextFillColor: 'transparent'
            },
            '.content-area': {
                height: `calc(100vh - 4rem)`
              },
              '.my-shadow': {
                boxShadow: "0px 0px 1px rgba(26, 32, 36, 0.32), 0px 1px 2px rgba(91, 104, 113, 0.32)"
              }

})
    }
})












