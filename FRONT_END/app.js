const div = document.createElement("div");
document.getElementById("main").appendChild(div);
div.className = "test";
div.id = "one";

const createRow = (rowName, ulId, seatsNumb, reservedSeats) => {
    const ul = document.createElement("ul");
    document.getElementById("one").appendChild(ul);
    ul.id = ulId;
    for (let i = 0; i < seatsNumb + 1; i++) {
        if (i == 0) {
            const li = document.createElement("li");
            li.innerHTML = rowName;
            document.getElementById(ulId).appendChild(li);
        } else {
            const li = document.createElement("li");
            li.innerHTML = i;
            document.getElementById(ulId).appendChild(li);
            console.log(reservedSeats[i]);
            li.addEventListener("click", () => {
                if (reservedSeats[i] == 0) {
                    li.style.backgroundColor = "red";
                    reservedSeats[i] = 1;
                } else {
                    li.style.backgroundColor = "grey";
                    reservedSeats[i] = 0;
                }
            });
            if (reservedSeats[i] == 1) {
                li.style.backgroundColor = "red";
            }
        }
    }
};

const createCinema = (rowsNumb, seatsNumb, reservedSeats) => {
    const alpha = "ABCDEFGHIJKLMNOPQRD";
    const alpha2 = "abcdefghijklmno";
    for (let i = 1; i < rowsNumb; i++) {
        strName = `ROW ${i}`;
        createRow(`${alpha[i - 1]} `, strName, seatsNumb, reservedSeats);
    }
    const div = document.createElement("div");
    document.getElementById("main").appendChild(div);
};

const main = () => {
    const reserverdSeats = "00000000000000000000";
    createCinema(10, 20, reserverdSeats.split(""));
};
main();
