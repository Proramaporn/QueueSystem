package handler

import (
	"fmt"
	"net/http"

	"github.com/Proramaporn/QueueSystem/service"
	"github.com/Proramaporn/QueueSystem/utils"

	"github.com/gin-gonic/gin"
)

func CookieMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		cookie, err := c.Cookie("user_id")
		if err != nil {
			id := utils.GenerateUserID()
			c.SetCookie("user_id", id, 3600*24, "/", "", false, true)
		}
		fmt.Println(cookie)
		c.Next()

	}
}

func TakeQueue(c *gin.Context) {
	userID, _ := c.Cookie("user_id")
	q := service.AssignQueue(userID)
	c.JSON(http.StatusOK, gin.H{"queue": q})
}

func GetCurrentQueue(c *gin.Context) {
	q := service.GetCurrentQueue()
	c.JSON(http.StatusOK, gin.H{"current": q})
}

func NextQueue(c *gin.Context) {
	q := service.AdvanceQueue()
	c.JSON(http.StatusOK, gin.H{"current": q})
}

func ResetQueue(c *gin.Context) {
	service.ResetQueue()
	c.JSON(http.StatusOK, gin.H{"current": "A0"})
}
