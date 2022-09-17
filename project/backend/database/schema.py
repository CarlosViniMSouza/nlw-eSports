from sqlalchemy import Column, ForeignKey, Integer, String, BOOLEAN, create_engine
from sqlalchemy.orm import declarative_base, relationships
from datetime import datetime
import uuid


Base = declarative_base()

class Game(Base): 
    __tablename__ = "game"

    id = Column(uuid.uuid4, primary_key=True)
    title = Column(String)
    bannerUrl = Column(String)

    ads = relationships(
        "Ad",
        back_populates="game",
        cascade="all, delete-orphan"
    )


class Ad(Base):
    __tablename__ = "ad"

    id = Column(uuid.uuid4, primary_key=True)
    gameId = Column(Integer, ForeignKey("game.id"), nullable=False)
    name = Column(String) 
    yearsPlaying = Column(Integer)
    discord = Column(String)
    weekDays = Column(String)
    hourStart = Column(Integer)
    hourEnd = Column(Integer)    
    useVoiceChannel = Column(BOOLEAN)
    createdAt = Column(datetime.now())

    game = relationships(
        "Game",
        back_populates="ads",
        cascade="all, delete-orphan"
    )

    def __repr__(self) -> str:
        return f"Ad(id={self.id!r}, gameId={self.gameId!r})"

engine = create_engine("sqlite://", echo=True, future=True)
