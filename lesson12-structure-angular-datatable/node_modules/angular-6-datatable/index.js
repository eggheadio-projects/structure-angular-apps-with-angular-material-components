var dataTable_directive = require('./lib/src/DataTable');
var defaultSorter_directive = require('./lib/src/DefaultSorter');
var paginator_component = require('./lib/src/Paginator');
var bootstrapPaginator_component = require('./lib/src/BootstrapPaginator');
var dataTable_module = require('./lib/src/DataTableModule');

exports.DataTable = dataTable_directive.DataTable;
exports.DataEvent = dataTable_directive.DataEvent;
exports.PageEvent = dataTable_directive.PageEvent;
exports.SortEvent = dataTable_directive.SortEvent;
exports.DefaultSorter = defaultSorter_directive.DefaultSorter;
exports.Paginator = paginator_component.Paginator;
exports.BootstrapPaginator = bootstrapPaginator_component.BootstrapPaginator;
exports.DataTableModule = dataTable_module.DataTableModule;
