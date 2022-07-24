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

		return self.cards


	def print_cards(self):
		for card in self.cards:
			print(card.color, card.card_type)


class BlackJack:
	def __init__(self):
		self.game_state = {}
		self.dealer_score = 0
		self.deck = Deck().deal()
		self.cards_used = []
		self.player_scores = {}
		self.num_of_players = 1
 
	def pick_card(self):
		card = self.deck[random.randint(0, 51)]

		return card

	def deal_cards(self):
		self.init_game_state()

		for player in range(self.num_of_players+1):
			key = "player_" + str(player+1)
			if key in self.game_state:
				for j in range(2):
					self.game_state[key].append(self.pick_card())

		print(self.game_state)

	def init_game_state(self):
		self.game_state["dealer"] = []
		
		for player in range(self.num_of_players):
			player_str = "player_" + str(player+1)
			self.game_state[player_str] = []

	def new_game(self):
		self.deal_cards()


new_game = BlackJack()
new_game.new_game()