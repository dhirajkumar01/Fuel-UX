
                           //FOR DEFINE THE COLUMN
                            var totalColumns = [
                                {
                                    property: 'toponymName',
                                    label: 'name',
                                    sortable: true
                                },
                                {
                                    property: 'countrycode',
                                    label: 'country',
                                    sortable: true
                                },
                                {
                                    property: 'population',
                                    label: 'population',
                                    sortable: true
                                },
                                {
                                    property: 'fcodeName',
                                    label: 'Type',
                                    sortable: true
                                },
                                {
                                    property: 'fcl',
                                    label: 'fcl',
                                    sortable: true
                                },
                                {
                                    property: 'fclName',
                                    label: 'fclName',
                                    sortable: true
                                },

                                {
                                    property: 'wikipedia',
                                    label: 'wikipedia',
                                    sortable: true
                                },
                                {
                                    property: 'lng',
                                    label: 'lng',
                                    sortable: true
                                },
                                {
                                    property: 'fcode',
                                    label: 'fcode',
                                    sortable: true
                                },
                                {
                                    property: 'geonameId',
                                    label: 'geonameId',
                                    sortable: true
                                },
                                {
                                    property: 'lat',
                                    label: 'lat',
                                    sortable: true
                                }
                            ];


                            // INITIALIZING THE DATAGRID
                            var dataSource = new StaticDataSource({
                                columns: totalColumns ,
                                data: geoData,
                                delay: 250
                            });

                    
                            var $gridInstance = $('#MyGrid').datagrid({
                                dataSource: dataSource,
                                stretchHeight: false
                            });
                        console.log("dataSource", dataSource)

                        //UPDAT THE TABLE WITH SELECTED VALUE FROM CHECK BOX
                            var UpdateTable = function () {

                            var colsSelected = [];
                            $("#checkboxes").find(":checked").each(function (index, elem) {
                                var colName = $(elem).attr('name');
                                colsSelected.push(colName);
                                });
                               
                                var colsToRender = totalColumns.filter(function (column) {
                                    //sconsole.log("column", column.property);
                                return colsSelected.indexOf(column.property) !== -1;
                            });
                            //console.log(colsSelected);
                            //console.log(colsToRender);
                            var _grid = $('#MyGrid').data('datagrid');
                                _grid.columns = _grid.options.dataSource._columns = colsToRender;
                                //console.log("_grid.options.dataSource._columns",_grid.options.dataSource._columns)
                            _grid.$colheader.empty();
                            _grid.renderColumns();
                            _grid.reload();
                            }

                             $('#datagrid-reload').on('click', function () {
                            $('#MyGrid').datagrid('reload');
                             });
                            $('.dropdown-toggle').dropdown();


                         var expanded = false;

                         function showCheckboxes() {
                            var checkboxes = document.getElementById("checkboxes");
                            if (!expanded) {
                                console.log("hello")
                                checkboxes.style.display = "block";
                                expanded = true;
                            } else {
                                console.log("hiiii")
                                checkboxes.style.display = "none";
                                expanded = false;
                            }
                         };

                        
                        //For taking the value selected CHECK BOX ABD CALLING THE UpdateTable()
                        $("input[type='checkbox']").change(function () {
                         UpdateTable(); 
 
                          });