// $(function () {
//     $("#example1").DataTable({
//       "responsive": true,
//       "autoWidth": false,
//       "bDestroy": true,
//       "paging": true,
//     });
//     $('#example2').DataTable({
//       "paging": true,
//       "lengthChange": false,
//       "searching": false,
//       "ordering": true,
//       "info": true,
//       "autoWidth": false,
//       "responsive": true,
//     });

//     $( 'table#dt-sample' ).dataTable({
// 			// select: true,
// 			dom: "<'row ml-0 mr-0 pt-2 pb-1 '<'col-sm-12 col-md-6 pt-1'l><'col-sm-12 col-md-6 pt-1'f>> <'row'<'col-sm-12'tr>><'row ml-0 mr-0 pt-3 pb-3'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 text-right'p>>",
// 			// dom:"<'row'<'col-sm-12'tr>>" +
// 			// 	// "<'dt-footer'<'row'<'col-12 col-md-2'l><'col-12 col-md-6 exportlinks'><'col-12 col-md-4'p>>>",
// 			// 	"<'dt-footer'<'row'<'col-12'<'dt-download' l <' '>><'dt-pagination' ip>>>>",
// 			select: true,
// 			responsive: true,
//       bDestroy: true,
// 			language: {
// 				// search: "Search in table:", 
// 				zeroRecords: "No matching records found,<br/>try another search term",
// 				processing: "Loading...", 
// 				lengthMenu: "Showing _MENU_",
// 				info: "Showing _START_ to _END_ of <b>_TOTAL_</b> entries",
// 			}
//     });
  
// 	$("div.exportlinks").html('<div class="dt-extras">'
// 						+ '<div class="dt-exports">'
// 							// + '<em>Export to :<span class="chevron"></span></em>'
// 							 + '<a class="button"><img src="../images/icon/download.png"><em>Download</em></a>'
// 								+ '<div class="export-content">'
// 									// + '<button class="linkbutton exp-excel">Excel <b>(.xlsx)</b></button>'
// 									+ '<button class="linkbutton exp-pdf">Pdf <b>(.pdf)</b></button>'
// 									//+ '<button class="linkbutton exp-word">word <b>(.docx)</b></button>'
// 								//	+ '<button class="linkbutton exp-xml">XML <b>(.xml)</b></button>'
// 								//	+ '<button class="linkbutton exp-csv">csv <b>(.csv)</b></button>'
// 								+ '</div><!-- .export-content-->'
// 					+ '</div><!--.dt-extras-->');
// 	// dtsetResponsive();
//   $( 'table#dt-sample' ).wrap( '<div class="restable-box"></div>' );

//   });




$(function () {
    $("#example1").DataTable({
      "responsive": true,
      "autoWidth": false,
      "bDestroy": true,
    });
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
    });
  });
