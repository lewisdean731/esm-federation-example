declare global {
    namespace JSX {
      interface IntrinsicElements {
        'web-app': React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        >;
      }
    }
  }