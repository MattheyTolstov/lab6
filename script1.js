function is_start_point_in_segment_ox(x1, x2) {
    choice1 = (x1 > 0) && (x2 < 0)
    choice2 = (x2 > 0) && (x1 < 0)
    
    if (choice1 || choice2) {
        alert(1)
    } else {
        alert(0)
    }
}

alert("Определим лежит ли начало координат в отрезке")
x1 = prompt("Введите первую координату OX:")
x2 = prompt("Введите вторую координату OX:")

is_start_point_in_segment_ox(x1, x2)