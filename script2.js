function check_is_number(num) {
    let list_right_symbol = "0123456789,."
    let flag = true

    if (num.indexOf(".") != num.lastIndexOf(".")) {
        flag = false
    }

    if (num.indexOf(",") != num.lastIndexOf(",")) {
        flag = false
    }

    if ((num.indexOf(",") != -1) && (num.indexOf(".") != -1)) {
        flag = false
    }

    if (flag == true) {
        for (let i = 0; i < num.length; i++) {
            if ((list_right_symbol.indexOf(num[i]) == -1)) {
                flag = false
                break
            }
        }
    }
    if (flag == true) {
        count_even_numbers(num)
    } else {
        alert("Введенные данные неверны!")
    }
    }

function count_even_numbers(num) {
    let split_num = String(num).split("")
    
    let count_even_numbers = 0
    let list_even_numbers = []

    for (let i = 0; i < split_num.length; i++) {
        if (Number(split_num[i]) % 2 == 0) {
            count_even_numbers++
            list_even_numbers.push(split_num[i])
        }
    }

    alert(`Количество четных цифр в числе ${num}: ${count_even_numbers}
Список четных цифр:  ${list_even_numbers.join(";  ")}`)
}

let num = prompt("Введите число:")

check_is_number(num)