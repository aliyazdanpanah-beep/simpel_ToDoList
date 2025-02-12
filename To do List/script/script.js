// انتخاب المان‌های مورد نیاز
const input = document.getElementById('Input'); // اینپوت
const addButton = document.getElementById('ADDB'); // دکمه Add
const deleteButton = document.getElementById('DELB'); // دکمه Delete
const ul = document.getElementById('UL'); // لیست

// اضافه کردن رویداد کلیک به دکمه Add
addButton.addEventListener('click', function () {
    // گرفتن مقدار اینپوت
    const taskText = input.value.trim();

    // اگر اینپوت خالی نبود
    if (taskText !== '') {
        // ایجاد یک آیتم جدید برای لیست
        const li = document.createElement('li');
        li.textContent = taskText;

        // اضافه کردن آیتم به لیست
        ul.appendChild(li);

        // خالی کردن اینپوت
        input.value = '';
    } else {
        // اگر اینپوت خالی بود، به کاربر هشدار بده
        alert('لطفاً یک تسک وارد کنید!');
    }
});

// اضافه کردن رویداد کلیک به دکمه Delete
deleteButton.addEventListener('click', function () {
    // پاک کردن تمامی آیتم‌های لیست
    ul.innerHTML = '';
});