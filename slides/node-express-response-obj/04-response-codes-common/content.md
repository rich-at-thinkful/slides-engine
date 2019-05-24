# Common Status Codes

<div class="smallest">
<div class="row">
  <div class="cell-6">
    <table>
      <tr>
        <th>Code</th>
        <th>Status Text</th>
        <th>Desc</th>
      </tr>
      <tr>
        <td>200</td>
        <td>OK</td>
        <td><span class="small">General success response.</span></td>
      </tr>
      <tr>
        <td>201</td>
        <td>Created</td>
        <td><span class="small">Successful request and a new resource has been created. Often in response to a POST request.</span></td>
      </tr>
      <tr>
        <td>204</td>
        <td>No Content</td>
        <td><span class="small">Successful request and server has no additional content to return. Often with DELETE request.</span></td>
      </tr>
      <tr>
        <td>304</td>
        <td>Not Modified</td>
        <td><span class="small">The requested resource hasn't changed since last request -- the client will use this info to not waste bandwidth on re-downloading.</span></td>
      </tr>
      <tr>
        <td>400</td>
        <td>Bad Request</td>
        <td><span class="small">The server could not understand the request. Client should change it before resending.</span></td>
      </tr>
      <tr>
        <td>401</td>
        <td>Unauthorized</td>
        <td><span class="small">The client did not provide required credentials.</span></td>
      </tr>
      <tr>
        <td>404</td>
        <td>Not Found</td>
        <td><span class="small">The resource couldn't be found. The client should try a different path.</span></td>
      </tr>
      <tr>
        <td>500</td>
        <td>Server Error</td>
        <td><span class="small">Generic response when server has thrown an error. The client did nothing wrong.</span></td>
      </tr>
    </table>
  </div>
</div>
</div>