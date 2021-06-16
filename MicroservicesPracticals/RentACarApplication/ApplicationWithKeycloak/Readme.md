# Authentication Details


## Important points

- Configuration has been integrated to the Profile service. So there is no separate configuration server.
- Continuation from playlist - 10. 

# Details

Details about Profile service authentication done using keycloak,oAuth2 and openid.

## Keycloak Information

## The users -
damsak
john

## Roles available - 
1) User Role
2) Admin Role

## Roles with Users

damsak - admin
john - user

## Application Information

## Profile Service

##  Endpoints available and their access rights

1) Add a Customer (endpoint - "/services/profile") -  Only "admin" Role

2) Get a customer with provided id (endpoint - "services/profile?id=6") - Only "admin" Role

3) Get all Customers ( endpoint - "/services/allProfiles") - Only "user" role.

## Vehicle Service

##  Endpoints available and their access rights

1) Add a Vehicle (endpoint - "/services/vehicle") -  Only "admin" Role

2) Get a Vehicle with provided id (endpoint - "services/vehicle?id=12") - Only "admin" Role

3) Get all Vehicle ( endpoint - "/services/allVehicles") - Only "user" role.

## Steps to execute

1) Start the application and connect to the database. 

2) Get the access token.

3) Pass the access token with the particular request.


