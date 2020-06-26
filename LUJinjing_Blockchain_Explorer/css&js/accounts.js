$(document).ready(function all_acc_info(){
    var url_account = 'http://159.138.135.42:8008/accounts'
    $.ajax({
      url: url_account,
      method: 'GET',
      dataType: 'JSON',
      success: function(data) {
      //console.log(data.data)
      var item=data.data.accounts;
      var acc_list = "";
      for(var i=0;i<item.length;i++){
        var acc_info = get_acc_info(item[i],"")}
      }})
    })

function get_acc_info(data,acc_list){
    $.ajax({
      url:"http://159.138.135.42:8008/status/" + data,
      method:"GET",
      dataType: "JSON",
      success: function(data){
      item=data.data.accountStatus;
      console.log(item)
      acc_list+= '<tr><td>' + item.AccountNonce + '</td>'
      acc_list+= '<td>' + item.Balance + '</td>'
      acc_list+= '<td>' + item.StorageRoot + '</td>'
      acc_list+= '<td>' + item.CodeHash + '</td></tr>'
      $("#acc_table").append(acc_list)
      }});
    }



  