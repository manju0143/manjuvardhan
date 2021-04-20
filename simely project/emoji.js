var input = document.querySelector('.text');
        var picker = new EmojiButton({ 
            position: 'right-start'//auto
        })
        picker.on('emoji', function(emoji) { 
            input.value += emoji;
        })
        input.addEventListener('click',function(){ 
           picker.pickerVisible ? picker.hidePicker() : picker.showPicker(input);

})


