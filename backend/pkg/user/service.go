package user

import (
	"context"
	"log"
	"pockethealth/internchallenge/pkg/datastore"
)

// ApiServices are an instance of an ApiServicer that implement the api actions for an ApiServicer
type UserApiService struct{}

// NewUserApiService creates a new Api Service
func NewUserApiService() UserApiService {
	return UserApiService{}
}

// PostRegister - Register a User
func (s UserApiService) PostRegister(ctx context.Context, name string, email string, favoriteColor string) (string, error) {
	// save user to datastore
	userId, err := datastore.CreateUser(ctx, name, email, favoriteColor)
	if err != nil {
		log.Printf("error creating user: %q", err.Error())
		return "", err
	}
	log.Printf("created user with id: %s\n", userId)

	// Task 3: Bug fix for /register.
	return userId, nil
}
