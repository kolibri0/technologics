<template>
  <div class="languages-page">
    <div class="content">
      <div class="contain-table">
        <table class="up" cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr class="tr-up">
              <th>Name</th>
              <th>Date</th>
              <th>Type</th>
              <th>Compiled /<br>Interpreted</th>
              <th>Complexity</th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="tbl-content">
        <table class="down" cellpadding="0" cellspacing="0" border="0">
          <tbody>
            <tr>
              <td>AAC</td>
              <td>AUSTRALIAN COMPANY </td>
              <td>$1.38</td>
              <td>+2.01</td>
              <td>-0.36%</td>
            </tr>
            <tr>
              <td>AAD</td>
              <td>AUSENCO</td>
              <td>$2.38</td>
              <td>-0.01</td>
              <td>-1.36%</td>
            </tr>
            <tr>
              <td>AAX</td>
              <td>ADELAIDE</td>
              <td>$3.22</td>
              <td>+0.01</td>
              <td>+1.36%</td>
            </tr>
            <tr>
              <td>XXD</td>
              <td>ADITYA BIRLA</td>
              <td>$1.02</td>
              <td>-1.01</td>
              <td>+2.36%</td>
            </tr>
            <tr>
              <td>XXD</td>
              <td>ADITYA BIRLA</td>
              <td>$1.02</td>
              <td>-1.01</td>
              <td>+2.36%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>
/* h1 {
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
  margin-bottom: 15px;
} */

table {
  width: 1100px;
  margin: 0 auto;
  table-layout: fixed;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
}

.up {
  border-radius: 20px 20px 0 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.down {
  border-radius: 0 0 20px 20px;
}

th {
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 15px;
  color: #fff;
  text-transform: uppercase;
}

td {
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: #fff;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
}
</style>