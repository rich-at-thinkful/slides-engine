### Insertion Anomalies

* Supplier without an Order creates a lot of NULLs {style=color:var(--red)}

<div class="tiny">

<table>
<thead>
<tr>
<th>Date</th>
<th>Supplier</th>
<th>Supplier Phone</th>
<th>Supplier City</th>
<th>Item Name</th>
<th>Item Amount</th>
<th>Item Unit</th>
<th>Item Unit Cost</th>
<th>Item Total Cost</th>
<th>Shipping Status</th>
</tr>
</thead>
<tbody>
<tr class="background-red">
<td>NULL</td>
<td>Dunder Mifflin</td>
<td>845-933-9387</td>
<td>Scranton, PA</td>
<td>NULL</td>
<td>NULL</td>
<td>NULL</td>
<td>NULL</td>
<td>NULL</td>
<td>NULL</td>
</tr>
<tr>
<td>12 Dec 2018</td>
<td>Arnold Grummer's Papermaking</td>
<td>920-840-6056</td>
<td>Appleton, WI</td>
<td>Paper Additives</td>
<td>10</td>
<td>lbs</td>
<td>$3.85</td>
<td>$38.50</td>
<td>Delivered</td>
</tr>
<tr>
<td>14 December 2018</td>
<td>Glatfelter</td>
<td>49 (0) 3 39 86 / 69-0</td>
<td>Falkenhagen</td>
<td>G-Colors Envelope Papers</td>
<td>2000</td>
<td>lbs</td>
<td>$0.62</td>
<td>$1240.00</td>
<td>Preparing</td>
</tr>
<tr>
<td>23 Dec 2018</td>
<td>Arnold Grummer's Papermaking</td>
<td>920-840-6056</td>
<td>Appleton, WI</td>
<td>Abaca Sheet Pulp</td>
<td>50</td>
<td>lbs</td>
<td>$11.20</td>
<td>$560.00</td>
<td>Shipped</td>
</tr>
<tr>
<td>28 Dec 2018</td>
<td>Arnold Grummer's Papermaking</td>
<td>920-840-6056</td>
<td>Appleton, WI</td>
<td>Unbleached Abaca</td>
<td>1</td>
<td>Bale</td>
<td>$1499.00</td>
<td>$1499.00</td>
<td>Shipped</td>
</tr>
</tbody></table>

</div>

