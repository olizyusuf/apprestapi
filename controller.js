'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API Berjalan!", res);
};

// menampilkan data mahasiswa

exports.listAllMahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

exports.listDataMahasiswa = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa=?', [id],
        function (error, rows, fields) {
            if (error) {
                connection.log(error);
            } else {
                response.ok(rows, res);
            }
        });
}