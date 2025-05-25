package main

import (
	"time"

	"github.com/Proramaporn/QueueSystem/handler"
	"github.com/gin-contrib/cors"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))
	r.Use(handler.CookieMiddleware())

	r.POST("/api/queue/take", handler.TakeQueue)
	r.GET("/api/queue/current", handler.GetCurrentQueue)
	r.POST("/api/queue/next", handler.NextQueue)
	r.POST("/api/queue/reset", handler.ResetQueue)

	r.Run(":8080")
}
