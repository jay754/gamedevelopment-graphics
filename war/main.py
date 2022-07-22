import random

class Card:
	def __init__(self, card_type, color):
		self.color = color
		self.card_type = card_type

class Deck:
	def __init__(self):
		self.colors = ["SPADES", "DIAMONDS", "CLUBS", "REDS"]
		self.card_types = ["ACE", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
		self.cards = []

	def deal(self):
		for i in self.colors:
			for j in self.card_types:
				card = Card(i, j)
				self.cards.append(card)

	def print_cards(self):
		for card in self.cards:
			print(card.color, card.card_type)

	def pick_card(self):
		card = self.cards[random.randint(0, 51)]

		print(card.color, card.card_type)

deck = Deck()
deck.deal()
deck.pick_card()
deck.pick_card()