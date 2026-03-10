import { useEffect } from 'react';

function useScrollReveal() {
  useEffect(function() {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    var elements = document.querySelectorAll('.reveal');
    elements.forEach(function(el) { observer.observe(el); });

    return function() { observer.disconnect(); };
  }, []);
}

export default useScrollReveal;
