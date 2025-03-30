<h1 class="">RA JSON DB Admin Dashboard - Documentation</h1>
<p>Developed by Roberto Aleman, <a href="ventics.com">ventics.com</a> </p>
<p class="">This is a minimal web-based tool built with HTML5 and JavaScript to manage data stored in a JSON file. It allows you to view, add, edit, and delete records (in this case, product information) within a JSON database directly in your web browser.</p>
<p> Do you need advice to implement an IT project, develop an algorithm to solve a real-world problem in your business, factory, or company? Write me right now and I'll advise you.</p>

<h2 class="">Getting Started</h2>
<ol class="">
 	<li class="">
<p class=""><strong>Download the Files:</strong> Save the following code snippets into two separate files in the same directory:</p>

<ul class="">
 	<li class=""><code>index.html</code> (for the HTML structure)</li>
 	<li class=""><code>script.js</code> (for the JavaScript logic)</li>
</ul>
</li>
 	<li class="">
<p class=""><strong>Open in Browser:</strong> Open the <code>index.html</code> file in your preferred web browser (Google Chrome, Mozilla Firefox, Safari, etc.).</p>
</li>
</ol>
<h2 class="">Using the JSON DB Admin Dashboard</h2>
<h3 class="">1. Selecting the JSON Data File</h3>
<ul class="">
 	<li class="">
<p class=""><strong>Click "Choose File":</strong> At the top of the page, you will see a section labeled "Select JSON File:". Click on the "Choose File" button.</p>
</li>
 	<li class="">
<p class=""><strong>Browse and Select:</strong> A file dialog will appear. Navigate to the location of your JSON data file (e.g., <code>productos.json</code>) and select it. Ensure your JSON file has the following structure:</p>

<div class="">
<div class="">

<span class="">JSON</span>
<div class=""></div>
</div>
<div class="">
<div class="">
<pre class=""><code class="" role="text" data-test-id="code-content">{
  <span class="">"productos"</span>: [
    {
      <span class="">"id"</span>: <span class="">1</span>,
      <span class="">"name"</span>: <span class="">"Product Name"</span>,
      <span class="">"description"</span>: <span class="">"Product Description"</span>,
      <span class="">"price"</span>: <span class="">10.00</span>,
      <span class="">"stock"</span>: <span class="">100</span>
    },
    <span class="">// ... more product objects</span>
  ]
}
</code></pre>
</div>
</div>
</div></li>
 	<li class="">
<p class=""><strong>Data Loaded:</strong> Once the file is selected, the product data from your JSON file will be loaded and displayed in the "Lista de Productos" (Product List) table below.</p>
</li>
</ul>
<h3 class="">2. Viewing the Product List</h3>
<ul class="">
 	<li class="">The "Lista de Productos" table will display all the products loaded from the JSON file.</li>
 	<li class="">Each row in the table represents a product and shows its:
<ul class="">
 	<li class=""><strong>ID:</strong> The unique identifier of the product.</li>
 	<li class=""><strong>Nombre (Name):</strong> The name of the product.</li>
 	<li class=""><strong>Descripción (Description):</strong> A brief description of the product.</li>
 	<li class=""><strong>Precio (Price):</strong> The price of the product.</li>
 	<li class=""><strong>Stock:</strong> The current stock level of the product.</li>
 	<li class=""><strong>Acciones (Actions):</strong> Buttons to "Editar" (Edit) and "Borrar" (Delete) the product.</li>
</ul>
</li>
</ul>
<h3 class="">3. Adding a New Product</h3>
<ul class="">
 	<li class=""><strong>Navigate to "Agregar Nuevo Producto" (Add New Product):</strong> Above the product list, you'll find a form with input fields for the product details.</li>
 	<li class=""><strong>Fill in the Details:</strong> Enter the following information for the new product:
<ul class="">
 	<li class=""><strong>Nombre (Name):</strong> The name of the new product (required).</li>
 	<li class=""><strong>Descripción (Description):</strong> A description of the new product (optional).</li>
 	<li class=""><strong>Precio (Price):</strong> The price of the new product (required, must be a number).</li>
 	<li class=""><strong>Stock:</strong> The initial stock level of the new product (required, must be a whole number).</li>
</ul>
</li>
 	<li class=""><strong>Click "Agregar Producto" (Add Product):</strong> Once you have filled in all the required fields, click the "Agregar Producto" button. The new product will be added to the product list displayed in the table.</li>
</ul>
<h3 class="">4. Editing an Existing Product</h3>
<ul class="">
 	<li class=""><strong>Locate the Product:</strong> Find the product you want to edit in the "Lista de Productos" table.</li>
 	<li class=""><strong>Click "Editar" (Edit):</strong> In the "Acciones" column of the corresponding row, click the "Editar" button.</li>
 	<li class=""><strong>Form Populated:</strong> The form under "Agregar Nuevo Producto" will be automatically filled with the details of the selected product.</li>
 	<li class=""><strong>Modify Details:</strong> Make the necessary changes to the product's name, description, price, or stock in the input fields.</li>
 	<li class=""><strong>Click "Guardar Edición" (Save Edit):</strong> The "Agregar Producto" button will have changed to "Guardar Edición". Click this button to save your changes. The product list in the table will be updated with the modified information.</li>
</ul>
<h3 class="">5. Deleting a Product</h3>
<ul class="">
 	<li class=""><strong>Locate the Product:</strong> Find the product you want to delete in the "Lista de Productos" table.</li>
 	<li class=""><strong>Click "Borrar" (Delete):</strong> In the "Acciones" column of the corresponding row, click the "Borrar" button.</li>
 	<li class=""><strong>Confirmation:</strong> A confirmation dialog will appear asking if you are sure you want to delete the product. Click "OK" to proceed with the deletion or "Cancel" to abort.</li>
 	<li class=""><strong>Product Removed:</strong> If you click "OK", the product will be removed from the product list in the table.</li>
</ul>
<h3 class="">6. Saving Changes to the JSON File</h3>
<ul class="">
 	<li class=""><strong>Click "Guardar Cambios" (Save Changes):</strong> After making any additions, edits, or deletions, click the "Guardar Cambios" button located below the "Agregar Nuevo Producto" form.</li>
 	<li class=""><strong>File Download:</strong> Your browser will download a new JSON file. This file will have the same name as the original file you selected and will contain all the updated product data.</li>
 	<li class=""><strong>Important:</strong> This tool operates within your browser and cannot directly overwrite the original file on your computer for security reasons. You will need to manually replace the original JSON file with the downloaded file if you want to persist the changes.</li>
</ul>
<h2 class="">Code Structure</h2>
<p class="">Here's a brief overview of the code files:</p>

<ul class="">
 	<li class=""><strong><code>index.html</code>:</strong> Contains the HTML structure for the user interface, including the file selection, the product form, and the product list table. It also includes basic CSS for styling and links to the <code>script.js</code> file.</li>
 	<li class=""><strong><code>script.js</code>:</strong> Contains the JavaScript logic for:
<ul class="">
 	<li class="">Loading and parsing the JSON data from the selected file.</li>
 	<li class="">Displaying the products in the table.</li>
 	<li class="">Adding new products.</li>
 	<li class="">Editing existing products.</li>
 	<li class="">Deleting products.</li>
 	<li class="">Generating unique IDs for new products.</li>
 	<li class="">Downloading the updated JSON data as a file.</li>
</ul>
</li>
</ul>
<h2 class="">Important Considerations</h2>
<ul class="">
 	<li class=""><strong>Local Operation:</strong> This tool runs entirely in your web browser. Your data is processed locally and is not sent to any external server.</li>
 	<li class=""><strong>Saving Mechanism:</strong> Due to browser security restrictions, the tool downloads the modified JSON data. It does not directly save changes to the original file on your system.</li>
 	<li class=""><strong>Error Handling:</strong> Basic error handling is included for JSON parsing. More robust error handling and input validation could be added for a production environment.</li>
 	<li class=""><strong>Concurrency:</strong> This tool is not designed for concurrent access by multiple users. If multiple users try to modify the same JSON file simultaneously through this tool, data inconsistencies may occur.</li>
 	<li class=""><strong>Scalability:</strong> For very large JSON files, performance might be affected as the entire file is loaded into the browser's memory.</li>
