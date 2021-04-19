var input = document.querySelector('.text');
        var picker = new emojiButton({ 
            position: 'right-start'//auto
        })
        picker.on('emoji', function(emoji) { 
            input.value += emoji;
        })
        input.addEventListener('click',function(){ 
           picker.pickerVisible ? picker.hidePicker() : picker.showPicker(input);

})


