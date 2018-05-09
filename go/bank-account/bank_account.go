package account

import "sync"

type Account struct {
	amount int
	open   bool
}

var closeMutex = &sync.Mutex{}
var depositMutex = &sync.Mutex{}

func (a *Account) Balance() (int, bool) {
	if a.open {
		return a.amount, true
	}
	return a.amount, false
}

func (a *Account) Close() (int, bool) {
	closeMutex.Lock()
	defer closeMutex.Unlock()
	if !a.open {
		return 0, false
	}
	a.open = false
	return a.amount, true
}

func (a *Account) Deposit(amount int) (int, bool) {
	depositMutex.Lock()
	defer depositMutex.Unlock()
	if a.amount+amount < 0 {
		return a.amount, false
	}
	a.amount += amount
	return a.Balance()
}

func Open(amount int) *Account {
	if amount < 0 {
		return nil
	}
	return &Account{amount: amount, open: true}
}
