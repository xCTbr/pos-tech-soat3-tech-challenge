import swaggerAutogen from 'swagger-autogen';
const document = {
    info: {
      title: 'API Sistema de pedidos',
      description: 'Pos-Tech 3SOAT'
    },
    host: 'localhost:3000',
    definitions: {
        Parents: {
            father: "Simon Doe",
            mother: "Marie Doe"
        },
        User: {
            name: "Jhon Doe",
            age: 29,
            parents: {
                $ref: '#/definitions/Parents'
            },
            diplomas: [
                {
                    school: "XYZ University",
                    year: 2020,
                    completed: true,
                    internship: {
                        hours: 290,
                        location: "XYZ Company"
                    }
                }
            ]
        },
        AddCustomer: {
            $name: "Jhon Doe",
            $cpf: "123.456.789-x",
            $email: "jhon@example.com",
            $phone: "55119978654321"
        }
        ,
        AddCategory: {
            $categoryName: "Category A",
            $description: "Category description"
        },
        AddProduct: {
            $productName: "Product A",
            $category: "ID Category",
            $quantity: 10,
            $price: 10.00
        },
        AddOrder: {
            $orderNumber: "1",
            $customer: "ID Customer",
						$orderProductsDescription: [{
							productId: "ID product",
							productQuantity: 5			
						}],
            $totalOrderPrice: 10.00,
            $orderStatus: "ID Status"
        },
        AddOrderStatus:{
            $description: "pending"
        },
				UpdateOrderStatus:{
						$orderStatus: "ID new status"
				},
        AddPayment: {
            $description: "Description of payment",
            $order: "ID Order generated",
            $status: "Pending"
        },
        updatePayment: {
            $description: "Description of payment",
            $status: "Pending"
        }
    }
  };

/*
https://github.com/davibaltar/example-swagger-autogen/blob/master/swagger.js
https://www.npmjs.com/package/swagger-autogen
https://davibaltar.medium.com/documenta%C3%A7%C3%A3o-autom%C3%A1tica-de-apis-em-node-js-eb03041c643b
*/
swaggerAutogen()('./swagger-output.json', ['./src/web/index.js'], document);

/*swaggerAutogen()('./swagger-output.json', ['./src/routes/customerRoutes.js',
'./src/routes/categoryRoutes.js','./src/routes/productRoutes.js','./src/routes/orderRoutes.js','./src/routes/statusRoutes.js'], document);*/