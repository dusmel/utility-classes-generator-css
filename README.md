## Utility class generator

This is a simple implementation of css class generator based on project template variables. 

Massively inspired tailwind and currently using goron but would be removed in a near future.

### Usage:
Define the variations and the class names like in the following snippet

```js
padding: {
  variants: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
  },
  properties: [ 
    "p",
    ["pt", "top"], // pt being the class name top being property suffix ( eg .pt-sm { padding-top: 0.5rem })
    ["px", "inline"],
  ]
}
```

This will generate the following
```css
 .p-sm {
    padding: 0.5rem
 }
 .p-md {
    padding: 0.75rem
 }
 ...
 .px-sm {
    padding-inline: 0.5rem
 }
 ...
```

To generate the classes in `/out/utility-classes.css` 
```bash
npm run build 
# you should install dependencies first if you haven't
```

For more details: [Goron doc](https://github.com/Andy-set-studio/goron)

The general idea is to have the basic classes you will need starting a new project so you dont repeat yourself as much. 

- size (sm, md, lg, xl, ..)
- font
  - font-family: ff ( header, body )
  - font-size: fs ( size )
  - font-weight: fw ( size )
- color
  - variations ( primary, accent, neutral )
  - background: bg
  - color: text-[variation]
- spacing
  - padding: (p-sm, pt-lg, px-auto, ...)
  - margin: (m-sm, mt-lg, m`x-auto, ...)

Improvement ℹ️:
- Remove goron dependency
- convert the project to Typescript
- use esbuild for building
- add separators for sections or better separate context in different files 
- Improve readme