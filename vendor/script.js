// Side Bar Menu Start

function menu_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}
function menu_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}

function openRightMenu() {
  document.getElementById("rightMenu").style.width = "25%";
  document.getElementById("main").style.marginRight = "25%";
  document.getElementById("openRight").style.display = 'none';
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("main").style.marginRight = "0%";
  document.getElementById("openRight").style.display = "inline-block";
  document.getElementById("rightMenu").style.display = "none";
}

function openChat() {
  document.getElementById("chat").style.width = "25%";
  document.getElementById("main").style.marginRight = "25%";
  document.getElementById("rightMenu").style.display = "none";
  document.getElementById("chat").style.display = "block";
}

function closeChat() {
  // document.getElementById("main").style.marginRight = "0%";
  document.getElementById("chat").style.display = "none";
  document.getElementById("rightMenu").style.display = "block";
}

//   Side Bar Menu End

// Chart Doughnut

// Contoh Data dan Opsi Chart 1
var data1 = {
  labels: ['Label A', 'Label B', 'Label C', 'Label D', 'Label E', 'Label F', 'Label G', 'Label H', 'Label I', 'Label J'],
  datasets: [{
    data: [20, 30, 40, 10, 15, 25, 35, 45, 20, 30],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#E91E63', '#2196F3', '#FF9800', '#8BC34A', '#FF5722', '#9C27B0']
  }]
};

var options1 = {
  cutoutPercentage: 50,
  plugins: {
    legend: {
      display: false
    }
  }
};

/// Contoh Data dan Opsi Chart 2
var data2 = {
  labels: ['Label X', 'Label Y', 'Label Z', 'Label W', 'Label V'],
  datasets: [{
    data: [30, 20, 25, 15, 10],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#E91E63']
  }]
};

var options2 = {
  cutoutPercentage: 50,
  plugins: {
    legend: {
      display: false
    }
  }
};

// Contoh Data dan Opsi Chart 3
var data3 = {
  labels: ['Group A', 'Group B', 'Group C', 'Group D', 'Group E'],
  datasets: [{
    data: [40, 30, 20, 15, 25],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#E91E63']
  }]
};

var options3 = {
  cutoutPercentage: 50,
  plugins: {
    legend: {
      display: false
    }
  }
};


// Contoh Data dan Opsi Chart 4
var data4 = {
  labels: ['Group A', 'Group B', 'Group C', 'Group D', 'Group E', 'Group F', 'Group G', 'Group H', 'Group I', 'Group J'],
  datasets: [{
    data: [40, 20, 30, 25, 35, 15, 10, 45, 30, 25],
    backgroundColor: ['#E91E63', '#2196F3', '#FF9800', '#8BC34A', '#FF5722', '#9C27B0', '#FF6384', '#36A2EB', '#FFCE56', '#4CAF50']
  }]
};

var options4 = {
  cutoutPercentage: 50,
  plugins: {
    legend: {
      display: false
    }
  }
};

// Fungsi untuk menambahkan nilai dalam format rupiah jutaan
function tambahNilaiJutaan(data) {
  return data.map(value => value * 1000000);
}

// Menambahkan nilai dalam format rupiah jutaan ke data
data1.datasets[0].data = tambahNilaiJutaan(data1.datasets[0].data);
data2.datasets[0].data = tambahNilaiJutaan(data2.datasets[0].data);
data3.datasets[0].data = tambahNilaiJutaan(data3.datasets[0].data);
data4.datasets[0].data = tambahNilaiJutaan(data4.datasets[0].data);


// Fungsi untuk membuat chart dan label
function createChartAndLabels(containerId, chartId, labelId, paginationId, data, options) {
  var ctx = document.getElementById(chartId).getContext('2d');
  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
  });

  var labelContainer = document.getElementById(labelId);
  var paginationContainer = document.getElementById(paginationId);

  function showPage(pageNumber) {
    var itemsPerPage = 3;
    var start = (pageNumber - 1) * itemsPerPage;
    var end = start + itemsPerPage;
    var pageLabels = data.labels.slice(start, end);

    labelContainer.innerHTML = "";

    pageLabels.forEach(function (label, index) {
      var labelBox = document.createElement('div');
      labelBox.className = 'label-box';

      var colorBox = document.createElement('div');
      colorBox.className = 'color-box';
      colorBox.style.backgroundColor = data.datasets[0].backgroundColor[start + index];
      labelBox.appendChild(colorBox);

      var labelText = document.createElement('div');
      labelText.className = 'label-text';
      labelText.innerHTML = `<p>${label}</p><p>${data.datasets[0].data[start + index]}</p>`;
      labelBox.appendChild(labelText);

      labelContainer.appendChild(labelBox);
    });
  }

  function updatePaginationButtons(currentPage, totalPages) {
    paginationContainer.innerHTML = "";

    for (var i = 1; i <= totalPages; i++) {
      var pageButton = document.createElement('button');
      pageButton.textContent = i;

      pageButton.addEventListener('click', function () {
        var pageNumber = parseInt(this.textContent);
        showPage(pageNumber);
      });

      paginationContainer.appendChild(pageButton);
    }
  }

  // Menampilkan halaman pertama saat memuat
  showPage(1);

  // Inisialisasi pagination buttons
  var currentPage = 1;
  var totalPages = Math.ceil(data.labels.length / 3);
  updatePaginationButtons(currentPage, totalPages);
}


// Membuat Chart dan Label untuk Chart 1
createChartAndLabels("chart1-container", "chart1", "label1", "pagination1", data1, options1);
createChartAndLabels("chart2-container", "chart2", "label2", "pagination2", data2, options2);
createChartAndLabels("chart3-container", "chart3", "label3", "pagination3", data3, options3);
createChartAndLabels("chart4-container", "chart4", "label4", "pagination4", data4, options4);

// Chart Line

document.addEventListener("DOMContentLoaded", function() {
  var ctx = document.getElementById('incomeChart').getContext('2d');

  // Data pendapatan tahun ini dan tahun sebelumnya
  var data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2024',
        borderColor: 'rgba(75, 192, 192, 1)',
        data: [1500, 1800, 2000, 2200, 2500, 2700, 3000, 3200, 3500, 3800, 4000, 4200]
      },
      {
        label: '2023',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: [1300, 1600, 1800, 2000, 2300, 2500, 2800, 3000, 3200, 3400, 3600, 3800]
      }
    ]
  };

  // Konfigurasi chart
  var options = {
    scales: {
      x: {
        type: 'category',
        labels: data.labels
      },
      y: {
        beginAtZero: true
      }
    }
  };

  // Buat line chart
  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });
});


// Password 

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password span");

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
  } else {
      passwordInput.type = "password";
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var loginButton = document.getElementById('loginButton');
  var usernameInput = document.getElementById('username');
  var passwordInput = document.getElementById('password');

  loginButton.addEventListener('click', function() {
    // Periksa kredensial
    var enteredUsername = usernameInput.value;
    var enteredPassword = passwordInput.value;

    // Pastikan username dan password tidak kosong
    if (enteredUsername.trim() === '' || enteredPassword.trim() === '') {
      alert('Mohon isi kedua kolom username dan password.');
      return; // Hentikan proses login jika ada input yang kosong
    }

    // Periksa kredensial yang benar
    if (enteredUsername === 'username' && enteredPassword === 'password') {
      alert('Login berhasil!');
      // Redirect atau lakukan aksi setelah login berhasil
    } else {
      alert('Login gagal. Periksa kembali username dan password.');
    }
  });
});

function showContent(contentNumber) {
  var contents = document.querySelectorAll('.content');
  for (var i = 0; i < contents.length; i++) {
      contents[i].classList.remove('active');
  }
  document.getElementById('content' + contentNumber).classList.add('active');
}