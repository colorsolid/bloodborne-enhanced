# -*- coding: utf-8 -*-
def t210717_1():
    """State 0"""
    while True:
        """State 1"""
        call = t210717_x2()
        assert IsClientPlayer() == 1
        """State 2"""
        call = t210717_x3()
        assert not IsClientPlayer()

# broken lamp

def t210717_x0(actionbutton1=6106, flag1=6000, flag2=6001, flag3=6001, flag4=6001, flag5=6001, flag6=6001,
               flag7=6001):
    """State 0"""
    while True:
        """State 1"""
        assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
                and not IsPlayerDead() and not IsCharacterDisabled())
        """State 3"""
        assert (GetEventStatus(flag1) == 1 or GetEventStatus(flag2) == 1 or GetEventStatus(flag3) ==
                1 or GetEventStatus(flag4) == 1 or GetEventStatus(flag5) == 1 or GetEventStatus(flag6)
                == 1 or GetEventStatus(flag7) == 1)
        """State 2"""
        def ExitPause():
            SetTalkTime(0.5)
        if (not GetEventStatus(flag1) and not GetEventStatus(flag2) and not GetEventStatus(flag3) and
            not GetEventStatus(flag4) and not GetEventStatus(flag5) and not GetEventStatus(flag6) and
            not GetEventStatus(flag7)):
            pass
        elif CheckActionButtonArea(actionbutton1):
            break
        elif (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
              and not IsPlayerDead() and not IsCharacterDisabled())):
            pass
    """State 4"""
    return 0

def t210717_x1():
    """State 0,1"""
    ForceCloseMenu()
    """State 2"""
    return 0

def t210717_x2():
    """State 0"""
    while True:
        """State 3"""
        assert (t210717_x0(actionbutton1=6106, flag1=6000, flag2=6001, flag3=6001, flag4=6001, flag5=6001,
                flag6=6001, flag7=6001))
        """State 1"""
        Label('L0')
        if GetEventStatus(12103010) == 1:
            call = t210717_x10() # dummy
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3:
                """State 2"""
                assert t210717_x1()
        elif GetEventStatus(12103011) == 1:
            call = t210717_x6() # lower only
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3:
                assert t210717_x1()
            elif GetEventStatus(12103010) == 1:
                ForceCloseMenu()
                Goto('L0')
        elif GetEventStatus(12103012) == 1:
            call = t210717_x5() # mid down
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3:
                assert t210717_x1()
            elif GetEventStatus(12103011) == 1:
                ForceCloseMenu()
                Goto('L0')
        else:
            call = t210717_x4() # all shops
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3:
                assert t210717_x1()
            elif GetEventStatus(12103012) == 1:
                ForceCloseMenu()
                Goto('L0')
    """Unused"""
    """State 4"""
    return 0

def t210717_x3():
    """State 0,1"""
    DebugEvent('ゲスト待機')
    Quit()
    """Unused"""
    """State 2"""
    return 0

# upper -> lower
def t210717_x4():
    ClearTalkListData()
    OpenRegularShop(202900, 203899)
    def WhilePaused():
        SetTalkTime(0.33)
    assert not CheckSpecificPersonMenuIsOpen(11, 0)
    return 0

# mid -> lower
def t210717_x5():
    ClearTalkListData()
    OpenRegularShop(202800, 203799)
    def WhilePaused():
        SetTalkTime(0.33)
    assert not CheckSpecificPersonMenuIsOpen(11, 0)
    return 0

# lower
def t210717_x6():
    ClearTalkListData()
    OpenRegularShop(202500, 203499)
    def WhilePaused():
        SetTalkTime(0.33)
    assert not CheckSpecificPersonMenuIsOpen(11, 0)
    return 0

# dummy shop
def t210717_x10():
    ClearTalkListData()
    OpenRegularShop(202000, 202999)
    def WhilePaused():
        SetTalkTime(0.33)
    assert not CheckSpecificPersonMenuIsOpen(11, 0)
    return 0