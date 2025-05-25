package service

import (
	"fmt"
	"sync"

	"github.com/Proramaporn/QueueSystem/storage"
)

var mu sync.Mutex

func nextCode(code string) string {
	if len(code) != 2 {
		return "A0"
	}
	a, b := code[0], code[1]
	if b == '9' {
		b = '0'
		if a == 'Z' {
			a = 'A'
		} else {
			a++
		}
	} else {
		b++
	}
	return fmt.Sprintf("%c%c", a, b)
}

func AssignQueue(userID string) string {
	mu.Lock()
	defer mu.Unlock()

	q := storage.GetLastQueue()
	next := nextCode(q)
	storage.SetLastQueue(next)
	storage.SetUserQueue(userID, next)
	return next
}

func GetCurrentQueue() string {
	return storage.GetCurrentQueue()
}

func AdvanceQueue() string {
	mu.Lock()
	defer mu.Unlock()

	current := storage.GetCurrentQueue()
	next := nextCode(current)
	storage.SetCurrentQueue(next)
	return next
}

func ResetQueue() {
	mu.Lock()
	defer mu.Unlock()

	storage.SetLastQueue("A0")
	storage.SetCurrentQueue("A0")
}
