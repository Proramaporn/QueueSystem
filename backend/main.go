package main

import (
	"github.com/Proramaporn/QueueSystem/handler"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.Use(handler.CookieMiddleware())

	r.POST("/api/queue/take", handler.TakeQueue)
	r.GET("/api/queue/current", handler.GetCurrentQueue)
	r.POST("/api/queue/next", handler.NextQueue)
	r.POST("/api/queue/reset", handler.ResetQueue)

	r.Run(":8080")
}
