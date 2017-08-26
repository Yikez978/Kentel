$(document).ready(function () {



    //on initialise le tableau
    var tableAffectation = $('#listAffectation').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "lengthMenu": [50, 100, 500, 1000],
        "pageLength": 500,
        "order": [4, 'asc'],
        //"oSearch": {"sSearch": "VPTS"},
        //"drawCallback": function( settings ) {
        //    $("#" + settings.sTableId+"_filter input").val("VPTS");
        //}
        //            var that = this;
        //
        //            if (that.search() !== this.value) {
        //        that
        //            .search(this.value)
        //            .draw();
        //    }
        //},
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {
                className: "all", "targets": [-2]
            },
            {"orderable": false, "targets": [-1, -2]}
        ]
    });


    // Pour la recherche par colonne
    tableAffectation.columns().every(function () {
        var that = this;

        $('input', this.header()).on('keyup change', function () {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });

    //$('input', this.header()).trigger('keyup change');

    $('#listConseillerMois1').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "pageLength": 50,
        "order": [2, 'asc'],
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });
    $('#listConseillerMois2').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "pageLength": 50,
        "order": [2, 'asc'],
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });
    $('#listConseillerMois3').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "pageLength": 50,
        "order": [2, 'asc'],
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    $('#listConseillerMois4').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "pageLength": 50,
        "order": [2, 'asc'],
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    $('#listClients').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    $('#listMandatAdresses').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    $('#listMandatCoordonnateurs').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    $('#listFetes').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            }
        ]
    });

    //on initialise le tableau
    var tableMandats = $('#listMandats').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {
                className: "all", "targets": [-2]
            },
            {"orderable": false, "targets": [-1, -2]}
        ]
    });

    // Pour la recherche par colonne du tableMandats
    tableMandats.columns().every(function () {
        var that = this;

        $('input', this.header()).on('keyup change', function () {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });

    $('#listDiplomes').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    //on initialise le tableau
    var tableConseillers = $('#listConseillers').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "lengthMenu": [50, 100, 200, 500],
        "pageLength": 200,
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {
                className: "all", "targets": [-3]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });


    // Pour la recherche par colonne du tableConseillers
    tableConseillers.columns().every(function () {
        var that = this;

        $('input', this.header()).on('keyup change', function () {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });
    //on initialise le tableau
    $('#annuaire').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "pageLength": 50,
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1, -2, -3, -4]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0, 1]
            },
            {"orderable": false, "targets": [-1, -2, -3, -4]}
        ]
    });

    $('#listUsers').DataTable({
        responsive: true,
        stateSave: true,
        "iDisplayLength": 25,
        "columnDefs": [
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": -1},
            {"orderable": false, "targets": -2}
        ]
    });

    $('#listConseillerLanguages').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        stateSave: true,
        "iDisplayLength": 25,
        "columnDefs": [
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": -1}
        ]
    });

    $('#listConseillerCompetences').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        stateSave: true,
        "iDisplayLength": 25,
        "columnDefs": [
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": -1}
        ]
    });


        $('#listConseillerCertifications').DataTable({
            responsive: true,
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
            },
            stateSave: true,
            "iDisplayLength": 25,
            "columnDefs": [
                {
                    className: "all", "targets": [0]
                },
                {"orderable": false, "targets": -1}
            ]
        });

    $('#listConseillersExperience').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        stateSave: true,
        "iDisplayLength": 25,
        "columnDefs": [
            {
                className: "all", "targets": [0]
            }
        ]
    });

    $('#listNiveaux').DataTable({
        responsive: true,
        stateSave: true,
        "iDisplayLength": 25,
        "columnDefs": [
            {
                className: "all", "targets": [0, -1]
            },
            {"orderable": false, "targets": -1}
        ]
    });

    //on initialise le tableau
    $('#listCompetences').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "lengthMenu": [50, 100, 200, 500],
        "pageLength": 200,
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1, -2]}
        ]
    });

    //Pour design
    var afficherLoupe = function () {
        $(".dataTables_filter label").append("<i class='fa fa-search loupe'></i>");
    };
    afficherLoupe();

    $(function () {
        $('.dataTables_wrapper select').selectric();
    });

    //initialise les tooltip

    $(window).on("load click change", function () {
        $('[data-toggle="tooltip"]').tooltip({trigger: "hover"});
    });

    $(window).on("load click change", function () {
        $("[data-hover='tooltip']").tooltip({trigger: "hover"});
    });

    //Ajout du bouton ajouter dans le document

    function ajoutBtn() {
        var btnAjout = $(".btn-ajout").remove().clone();
        $(".dataTables_wrapper .dataTables_length").before(btnAjout);
    }

    ajoutBtn();

    //on initialise le tableau
    $('#listFonctions').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    //on initialise le tableau
    $('#listPermission').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    //on initialise le tableau
    $('#competenceList').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });


        //on initialise le tableau
        $('#certificationList').DataTable({
            responsive: true,
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
            },
            "columnDefs": [
                {
                    className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
                },
                {
                    className: "all", "targets": [0]
                },
                {"orderable": false, "targets": [-1]}
            ]
        });

    //on initialise le tableau
    $('#adresseList').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    $('#typeCompetenceList').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    //on initialise le tableau
    $('#listBesoins').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "pageLength": 100,
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0, -2]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    //on initialise le tableau
    $('#listTypesBesoins').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    //on initialise le tableau
    $('#listPrioritesBesoins').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    //on initialise le tableau
    $('#listSourcesAffectations').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    //on initialise le tableau
    $('#listPermissions').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    //on initialise le tableau
    $('#listNotifications').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });


    //on initialise le tableau
    $('#listAdresses').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere colonne toujours affichée et centrée
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });


    //on initialise le tableau
    $('#listCoordonnateurs').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere colonne toujours affichée et centrée
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    $('#statutAffectationList').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    $('#languageList').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });

    var conseillerList = $('#conseillerList').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "lengthMenu": [10, 20, 50],
        "pageLength": 10,
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            }
        ]
    });


    // Pour la recherche par colonne du tableConseillers
    conseillerList.columns().every(function () {
        var that = this;

        $('input', this.header()).on('keyup change', function () {
            if (that.search() !== this.value) {
                that
                    .search(this.value)
                    .draw();
            }
        });
    });

    $('#actionList').DataTable({
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/French.json"
        },
        "columnDefs": [
            {
                className: "all table-center", "targets": [-1]//derniere et avant dernière colonnes toujours affichée et centrées
            },
            {
                className: "all", "targets": [0]
            },
            {"orderable": false, "targets": [-1]}
        ]
    });
});
