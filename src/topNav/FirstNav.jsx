import React from 'react'

const FirstNav = () => {
  
  const [isVisible, setIsVisible] = React.useState(true);
  
  React.useEffect(() => {
    const handleScroll = () => {
      // إذا نزلت تحت 40 بكسل، نخفيه
      if (window.scrollY > 40) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
  <div
  className={`
    fixed top-0 left-0 w-full
    transition-transform duration-500 ease-in-out scroll-smooth
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
  `}
>
  <h4 className="py-[1.2rem] text-sm text-gray-100 bg-primary text-center">
      Free shipping on orders over 1999EGP
    </h4>
  </div>
  )
}

export default FirstNav