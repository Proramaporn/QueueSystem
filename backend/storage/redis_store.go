package storage

import (
	"context"

	"github.com/redis/go-redis/v9"
)

var ctx = context.Background()
var rdb = redis.NewClient(&redis.Options{
	Addr: "localhost:6379",
})

func GetLastQueue() string {
	q, err := rdb.Get(ctx, "last_queue").Result()
	if err != nil {
		return "A0"
	}
	return q
}

func SetLastQueue(q string) {
	rdb.Set(ctx, "last_queue", q, 0)
}

func SetUserQueue(userID, queue string) {
	rdb.Set(ctx, "queue:"+userID, queue, 0)
}

func GetUserQueue(userID string) string {
	q, _ := rdb.Get(ctx, "queue:"+userID).Result()
	return q
}

func SetCurrentQueue(q string) {
	rdb.Set(ctx, "current_queue", q, 0)
}

func GetCurrentQueue() string {
	q, err := rdb.Get(ctx, "current_queue").Result()
	if err != nil {
		return "A0"
	}
	return q
}
