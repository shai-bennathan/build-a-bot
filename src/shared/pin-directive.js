// function applyStyle(binding, element) {
//   // if (binding.arg !== 'position') return;
//   // Object.keys(binding.modifiers).forEach((key) => {
//   //   element.style[key] = '5px';
//   // });
//   Object.keys(binding.value).forEach((position) => {
//     element.style[position] = binding.value[position];
//   });
//   element.style.position = 'absolute';
// }

export default function (element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}

// export default {
//   bind: (element, binding) => {
//     applyStyle(binding, element);
//   },
//   update: (element, binding) => {
//     applyStyle(binding, element);
//   },
// };
