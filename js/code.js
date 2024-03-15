window.addEventListener('DOMContentLoaded', function () {
   var codeBlocks = document.querySelectorAll('pre');

   codeBlocks.forEach(function (block) {
      var html = block.innerHTML;
      var escapedHtml = escapeHtml(html);
      console.log(html);
      block.innerHTML = '';
      block.innerHTML(escapedHtml);
   });

   function escapeHtml(text) {
      return text.replace('<', 's').replace('>', 's');
   }
});
