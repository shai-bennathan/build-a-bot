export default {
  bind: (element, binding) => {
    // if (binding.arg !== 'position') return;
    // Object.keys(binding.modifiers).forEach((key) => {
    //   element.style[key] = '5px';
    // });
    Object.keys(binding.value).forEach((position) => {
      element.style[position] = binding.value[position];
    });
    element.style.position = 'absolute';
  },
};
