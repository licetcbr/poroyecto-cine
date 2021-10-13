usuarios = [
    {id: 1, name: "Pepe", selected: false},
    {id: 2, name: "Juan", selected: false},
    {id: 3, name: "Pedro", selected: false},
    {id: 4, name: "Ana", selected: false},
];

function cellSelected(index) {
    usuarios[index].selected = !usuarios[index].selected;
}

function limpiarTbody() {
    tabla = document.getElementById("tabla-usuario");
    tbody = tabla.childNodes[3];
    while(tbody.rows.length != 0) {
        tbody.removeChild(tbody.rows[0]);
    }
}

function llenarTabla() {
    tabla = document.getElementById("tabla-usuario");
    tbody = tabla.childNodes[3];
    limpiarTbody();

    usuarios.forEach((item, i) => {
        tbody.insertRow();
        tbody.rows[i].insertCell()
        tbody.rows[i].insertCell()
        tbody.rows[i].insertCell()

        checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.addEventListener('click', () => {
            cellSelected(i);
        });

        tbody.rows[i].cells[0].appendChild(checkbox);
        tbody.rows[i].cells[1].innerText = item.id;
        tbody.rows[i].cells[2].innerText = item.name;
    });
}

function eliminarFila() {
    Swal.fire({
        title: '¿Estas seguro de eliminar el usuario?',
        text: "Esta opcion es irreversible!!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            for(let i=usuarios.length-1; i >= 0; i--) {
                if(usuarios[i].selected) {
                    usuarios.splice(i, 1);
                }
            };
            llenarTabla();
            Swal.fire(
                'Eliminado!',
                'El usario ha sido eliminado!',
                'success'
            )
        }
      })
}

llenarTabla();