import {useState, useContext, useEffect} from 'react';
import {Text, View, ScrollView, Pressable, FlatList} from 'react-native';
import MathJax from 'react-native-mathjax';

const AsciiOutput = ({data}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(data.toString());
  }, []);
  const newData = '$sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}$';
  const newDataTwo = 'Simplify: $(64^\\frac{1}{2} + 125^\\frac{1}{3})^2$';
  const newDataThree = '<p>Simplify: $\\sqrt 108 + \\sqrt 125 - \\sqrt 75$</p>';
  console.log(value);
  // html={
  //   '<p>Simplify: $sqrt 108 + sqrt 125 - sqrt 75$</p>'
  // }

  return (
    <>
      <MathJax
        // HTML content with MathJax support
        html={data}
        // MathJax config option
        mathJaxOptions={{
          messageStyle: 'none',
          extensions: ['tex2jax.js'],
          jax: ['input/TeX', 'input/MathML', 'output/HTML-CSS'],
          tex2jax: {
            inlineMath: [
              ['$', '$'],
              ['\\(', '\\)'],
            ],
            displayMath: [
              ['$$', '$$'],
              ['\\[', '\\]'],
            ],
            //   processEscapes: true,
          },
          TeX: {
            extensions: [
              'AMSmath.js',
              'AMSsymbols.js',
              'noErrors.js',
              'noUndefined.js',
            ],
          },
        }}
      />
    </>
  );
};

export default AsciiOutput;
